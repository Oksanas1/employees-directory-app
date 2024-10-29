import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FilterOption from '../filter-oprion/FilterOption';
import { RootState } from '../../store';
import { type EmployeePosition } from '../../state/employeesSlice';
import { useCombinedURLParams } from '../common';
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

const Subbar: React.FC = () => {
  const { position } = useSelector((state: RootState) => state.employees.filter);
  const { initializeParams, updateCombinedParams } = useCombinedURLParams();

  useEffect(() => {
    initializeParams();
  }, [initializeParams]);

  const handleChangeFilter = useCallback((value: EmployeePosition): void => {
    updateCombinedParams('position', value);
  }, [updateCombinedParams]);

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
