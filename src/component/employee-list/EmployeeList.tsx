import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../navigation/Navigation';
import ReportInformation from '../report-information/ReportInformation';
import SkeletonLoader from '../skeleton/Skeleton';
import ErrorPage from '../error-page/ErrorPage';
import { RootState, AppDispatch } from '../../store';
import { fetchEmployees, setFilter } from '../../state/employeesSlice';
import { selectSortedEmployees } from '../../state/sortEmployees.selector';
import EmployeesGroup from '../employees-group/EmployeesGroup';

const EmployeeList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { employees, statusQuery, filter } = useSelector((state: RootState) => state.employees);
  const filteredEmployees = useSelector(selectSortedEmployees);

  useEffect(() => {
    dispatch(setFilter(filter));
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
          isSortByAge={filter.sortBy === 'ageSort'}
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
