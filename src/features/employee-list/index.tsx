import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../filter';
import ReportInformation from '../../common/components/report-information';
import EmployeesGroup from './component/employees-group';
import SkeletonLoader from './component/skeleton';
import ErrorPage from '../error-page';
import { sortEmployees } from './configs/sortEmployees';
import { useCombinedURLParams } from '../filter/hooks';
import type { RootState } from '../../redux/store';

const EmployeeList: React.FC = () => {
  const { sortBy, searchText, position } = useCombinedURLParams().getSearchParams();
  const { employees, statusQuery } = useSelector((state: RootState) => state.employees);
  const filteredEmployees = useMemo(
    () => sortEmployees(employees, sortBy, searchText, position),
    [employees, sortBy, searchText, position],
  );

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
