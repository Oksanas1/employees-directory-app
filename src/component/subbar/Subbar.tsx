import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import FilterOption from '../filter-oprion/FilterOption';
import { RootState } from '../../store';
import { setFilter, type EmployeePosition } from '../../state/employeesSlice';
import { updateURLParams } from '../common';
import './subbar.scss';

export type PositionWork = 'All' | 'Designers' | 'Analysts' | 'Managers' | 'iOS' | 'Android';

type Option = {
  id: number;
  option: PositionWork;
  positionEmployee: EmployeePosition;
};

const listOfFilterOption: Option[] = [
  { id: 1, option: 'All', positionEmployee: 'all' },
  { id: 2, option: 'Designers', positionEmployee: 'designer' },
  { id: 3, option: 'Analysts', positionEmployee: 'analyst' },
  { id: 4, option: 'Managers', positionEmployee: 'manager' },
  { id: 5, option: 'iOS', positionEmployee: 'iOS' },
  { id: 6, option: 'Android', positionEmployee: 'android' },
];

const Subbar = () => {
  const dispatch = useDispatch();
  const { position } = useSelector((state: RootState) => state.employees.filter);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const positionFromURL = searchParams.get('position') || position;
    dispatch(setFilter({ position: positionFromURL }));
  }, [dispatch, searchParams, position]);

  const handleChangeFilter = (value: EmployeePosition): void => {
    dispatch(setFilter({ position: value }));
    updateURLParams('position', value, searchParams, setSearchParams);
  };

  return (
    <div className="subbar">
      {listOfFilterOption.map(({ id, option, positionEmployee }) => (
        <FilterOption
          key={id}
          text={option}
          positionEmployee={positionEmployee}
          selectedPosition={position}
          onOptionChange={handleChangeFilter}
        />
      ))}
    </div>
  );
};

export default Subbar;
