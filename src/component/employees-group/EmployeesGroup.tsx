import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import EmployeeInfo from '../employee/EmployeeInfo';
import GroupTitle from '../group-title/GroupTitle';
import { Employee } from '../../state/employeesSlice';
import './employees-group.scss';

interface EmployeesGroupProp {
  isSortByAge: boolean;
  groupKey: string;
  employees: Employee[];
}

const EmployeesGroup: React.FC<EmployeesGroupProp> = memo(
  ({ isSortByAge, groupKey, employees }) => (
    <div className="employees-group">
      {isSortByAge && <GroupTitle groupKey={groupKey} />}
      <ul className="employees-group__list">
        {employees.map(employee => (
          <li key={employee.id} className="employee-list__item">
            <Link to={`/employees/${employee.id}`}>
              <EmployeeInfo employee={employee} isSortByDate={isSortByAge} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
);

export default EmployeesGroup;
