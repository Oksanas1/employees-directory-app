import React from 'react';
import classNames from 'classnames';
import type { EmployeePosition } from '../../state/employeesSlice';
import type { PositionWork } from '../subbar/Subbar';
import './filter-option.scss';

type FilterOptionProps = {
  text: PositionWork;
  positionEmployee: EmployeePosition;
  onOptionChange: (value: EmployeePosition) => void;
  selectedPosition: EmployeePosition;
};

const FilterOption: React.FC<FilterOptionProps> = ({
  text,
  positionEmployee,
  onOptionChange,
  selectedPosition,
}) => (
  <div
    className={classNames('filter-option', {
      'filter-option_checked': selectedPosition === positionEmployee,
    })}
  >
    <input
      type="radio"
      name="filterOption"
      value={positionEmployee}
      id={positionEmployee}
      checked={selectedPosition === positionEmployee}
      className="filter-option__input"
      onChange={() => onOptionChange(positionEmployee)}
    />
    <label
      htmlFor={positionEmployee}
      className={classNames('filter-option__label', {
        'filter-option__label_checked': selectedPosition === positionEmployee,
      })}
    >
      {text}
    </label>
  </div>
);

export default FilterOption;
