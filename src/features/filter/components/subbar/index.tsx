import React, { useCallback, useEffect } from 'react';
import FilterOption from '../filter-option';
import { useCombinedURLParams } from '../../hooks';
import type { EmployeePosition } from '../../../../entities/employee/types';
import { listOfFilterOption } from './configs';
import './index.scss';

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
