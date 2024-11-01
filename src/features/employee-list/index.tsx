import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../filter';
import ReportInformation from '../../entities/report-information';
import EmployeesGroup from './component/employees-group';
import SkeletonLoader from './component/skeleton';
import ErrorPage from '../error-page';
import { fetchEmployees } from '../../redux/employeesSlice';
import { sortEmployees } from './configs/sortEmployees';
import { useCombinedURLParams } from '../../features/filter/configs';
import type { RootState, AppDispatch } from '../../redux/store';

const EmployeeList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { sortBy, searchText, position } = useCombinedURLParams().getSearchParams();
  const { employees, statusQuery } = useSelector((state: RootState) => state.employees);
  const filteredEmployees = useMemo(
    () => sortEmployees(employees, sortBy, searchText, position),
    [employees, sortBy, searchText, position],
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (statusQuery === 'loading' && !employees.length) {
    return <SkeletonLoader />;
  }

  if (statusQuery === 'failed') {
    return <ErrorPage />;
  }

  return (
    <div>
      <Navigation />
      {Object.entries(filteredEmployees).map(([groupKey, employees]) => (
        <EmployeesGroup
          key={groupKey}
          isSortByAge={sortBy === 'ageSort'}
          groupKey={groupKey}
          employees={employees}
        />
      ))}
      {Object.keys(filteredEmployees).length === 0 && (
        <ReportInformation
          title="We didn't find anyone"
          text="Try to adjust your request"
          isNeedReload={false}
          nameImage="loope"
        />
      )}
    </div>
  );
};

export default EmployeeList;
