import React from 'react';
import classNames from 'classnames';
import type { PositionWork } from '../../state/employeesSlice';
import './filter-option.scss';

interface FilterOptionProps {
  text: string;
  position: PositionWork;
  onOptionChange: (value: PositionWork) => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({ text, position, onOptionChange }) => {
  const nameValue = text.toLowerCase();

  return (
    <div className={classNames('filter-option', { 'filter-option_checked': position === text })}>
      <input
        type="radio"
        name="filterOption"
        value={text}
        id={nameValue}
        checked={position === text}
        className="filter-option__input"
        onChange={e => onOptionChange(e.target.value as PositionWork)}
      />
      <label
        htmlFor={nameValue}
        className={classNames('filter-option__label', {
          'filter-option__label_checked': position === text,
        })}>{text}</label>
    </div>
  );
};

export default FilterOption;
