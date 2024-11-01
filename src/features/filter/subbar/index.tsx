import React, { useCallback, useEffect } from 'react';
import FilterOption from '../filter-option';
import { useCombinedURLParams } from '../configs';
import type { PositionWork, EmployeePosition } from '../../../entities/employee/types';
import './index.scss';

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
  const { initializeParams, updateCombinedParams, getSearchParams } = useCombinedURLParams();
  const { position } = getSearchParams();

  useEffect(() => {
    initializeParams();
  }, [initializeParams]);

  const handleChangeFilter = useCallback(
    (value: EmployeePosition): void => {
      updateCombinedParams('position', value);
    },
    [updateCombinedParams],
  );

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
