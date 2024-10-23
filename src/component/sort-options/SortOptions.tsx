import React from 'react';
import classNames from 'classnames';
import type { SortOption } from '../../state/employeesSlice';
import './sort-options.scss';

type SortOptionsProps = {
  sortBy: SortOption;
  onOptionChange: (nameOption: string, value: string) => void;
  handleClickCloseModal: () => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortBy,
  onOptionChange,
  handleClickCloseModal,
}) => {
  const handleContentClick = (event: React.MouseEvent<HTMLFieldSetElement>): void => {
    event.stopPropagation();
  };

  return (
    <div className="sort-options sort-options-modal" onClick={handleClickCloseModal}>
      <fieldset className="sort-options__content" onClick={event => handleContentClick(event)}>
        <div className="sort-options__header">
          <button className="sort-options__close-btn" onClick={handleClickCloseModal}></button>
          <h4 className="sort-options__title">Сортировка</h4>
        </div>
        <label
          htmlFor="nameSort"
          className={classNames('sort-options__label', {
            'sort-options__label_checked': sortBy === 'nameSort',
          })}
        >
          <input
            type="radio"
            name="sortOption"
            value="nameSort"
            id="nameSort"
            checked={sortBy === 'nameSort'}
            className="sort-options__input"
            onChange={e => onOptionChange('sortBy', e.target.value as SortOption)}
          />
          По алфавиту
        </label>
        <label
          htmlFor="ageSort"
          className={classNames('sort-options__label', {
            'sort-options__label_checked': sortBy === 'ageSort',
          })}
        >
          <input
            type="radio"
            name="sortOption"
            value="ageSort"
            id="ageSort"
            checked={sortBy === 'ageSort'}
            className="sort-options__input"
            onChange={e => onOptionChange('sortBy', e.target.value as SortOption)}
          />
          По дню рождения
        </label>
      </fieldset>
    </div>
  );
};

export default SortOptions;
