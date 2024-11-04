import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ErrorPage from '../error-page';
import Spinner from '../../common/components/spinner';
import { RootState } from '../../redux/store';
import { formatTimestampToYears, formatTimestampToFullDateString } from './utils';
import { formatPhoneNumber } from './utils/formatPhoneNumber';
import type { Employee } from '../../entities/employee/types';
import './index.scss';

const EmployeeProfile: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { employees, statusQuery } = useSelector((state: RootState) => state.employees);
  const employee: Employee | null = employees.find(emp => emp.id === id) || null;

  if (statusQuery === 'loading') {
    return (
      <div className="spinner_center">
        <Spinner />
      </div>
    );
  }

  if (!employee) {
    return <ErrorPage />;
  }

  const { name, position, birthDate, phone, avatar, tag } = employee;

  return (
    <div className="employee-profile">
      <div className="employee-profile__header">
        <button onClick={() => navigate('/')} className="employee-profile__return-btn">
          <i className="employee-profile__return-icon fa-solid fa-angle-left"></i>
        </button>
        <div className="employee-profile__avatar">
          <img alt="User Avatar" src={avatar} className="employee-profile__avatar-image" />
        </div>
        <h2 className="employee-profile__title">
          {name} {tag && <span className="employee-profile__tag">{tag}</span>}
        </h2>
        <p className="employee-profile__position">
          {position[0].toUpperCase() + position.slice(1)}
        </p>
      </div>
      <div className="employee-profile__info">
        <p className="employee-profile__birth-date">
          <i className="employee-profile__birh-date-icon fa-regular fa-star"></i>
          {formatTimestampToFullDateString(birthDate)}
        </p>
        <p className="employee-profile__age">{formatTimestampToYears(birthDate)}</p>
        <p className="employee-profile__phone">
          <a href={`tel:${phone}`} className="employee-profile__phone-link">
            <i className="employee-profile__phone-icon fa-solid fa-phone"></i>
            {formatPhoneNumber(phone)}
          </a>
        </p>
      </div>
    </div>
  );
};

export default EmployeeProfile;
