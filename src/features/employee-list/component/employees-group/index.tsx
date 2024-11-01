import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeInfo from '../employee';
import GroupTitle from '../group-title';
import { Employee } from '../../../../redux/employeesSlice';
import './index.scss';

type EmployeesGroupProp = {
  isSortByAge: boolean;
  groupKey: string;
  employees: Employee[];
};

const EmployeesGroup: React.FC<EmployeesGroupProp> = ({ isSortByAge, groupKey, employees }) => (
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
);

export default EmployeesGroup;
