import React from 'react';
import { formatTimestampToDateString } from './utils';
import type { Employee } from '../../../../entities/employee/types';
import './index.scss';

type EmployeeInfoProps = {
  employee: Employee;
  isSortByDate: boolean;
};

const EmployeeInfo: React.FC<EmployeeInfoProps> = ({ employee, isSortByDate }) => {
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
};

export default EmployeeInfo;
