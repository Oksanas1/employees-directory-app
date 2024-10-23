import React from 'react';
import type { Employee } from '../../state/employeesSlice';
import { formatTimestampToDateString } from './utils/dateTransforme';
import './employee-info.scss';

type EmployeeInfoProps = {
  employee: Employee;
  isSortByDate: boolean;
}

const EmployeeInfo: React.FC<EmployeeInfoProps> = React.memo(({ employee, isSortByDate }) => {
  const { birthDate, avatar, name, tag, position } = employee;

  const titlePosition =
    position === 'iOS' ? position : position[0].toUpperCase() + position.slice(1);

  return (
    <div className="employee-info">
      <div className="employee-info__avatar">
        <img alt="User Avatar" src={avatar} className="employee-info__avatar-image" />
      </div>
      <div className="employee-info__content">
        <h2 className="employee-info__title">
          {name} {tag && <span className="employee-info__tag">{tag}</span>}
        </h2>
        <p className="employee-info__position">{titlePosition}</p>
      </div>
      {isSortByDate && (
        <p className="employee-info__birth-date">{formatTimestampToDateString(birthDate)}</p>
      )}
    </div>
  );
});

export default EmployeeInfo;
