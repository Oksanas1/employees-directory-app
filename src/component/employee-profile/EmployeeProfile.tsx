import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ErrorPage from '../error-page/ErrorPage';
import Spinner from '../spinner/Spinner';
import { RootState } from '../../store';
import { type Employee } from '../../state/employeesSlice';
import { formatTimestampToYears, formatTimestampToFullDateString } from './utils/formatTimeToAge';
import { formatPhoneNumber } from './utils/formatPhoneNumber';
import { getEmployeeByIdFromDB } from '../../getawey';
import './employee-profile.scss';

const EmployeeProfile: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { employees } = useSelector((state: RootState) => state.employees);
  const [isLoading, setIsLoading] = useState(true);
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    if (employees.length) {
      const foundEmployee = employees.find(emp => emp.id === id) || null;
      setEmployee(foundEmployee);
    } else if (id) {
      getEmployeeByIdFromDB(id)
        .then(fetchedEmployee => {
          setEmployee(fetchedEmployee);
          setIsLoading(false);
        })
        .catch(err => {
          console.error(err);
          setIsLoading(false);
          setEmployee(null);
        });
    }
  }, [employees, id]);

  if (isLoading && !employee) {
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
