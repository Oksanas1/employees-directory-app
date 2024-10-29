import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import SortOptions from '../sort-options/SortOptions';
import { RootState } from '../../store';
import { useCombinedURLParams } from '../common';
import './searchbar.scss';

const Searchbar: React.FC = () => {
  const [isOpenModalSortOption, setIsOpenModalSortOption] = useState(false);
  const { searchText, sortBy } = useSelector((state: RootState) => state.employees.filter);
  const { initializeParams, updateCombinedParams } = useCombinedURLParams();

  useEffect(() => {
    initializeParams();
  }, [initializeParams]);

  const handleOptionChange = useCallback(
    (nameOption: string, value: string): void => {
      updateCombinedParams(nameOption, value);
    },
    [updateCombinedParams],
  );

  const handleClickOpenModal = (): void => {
    setIsOpenModalSortOption(true);
  };

  const handleClickCloseModal = (): void => {
    setIsOpenModalSortOption(false);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        id="searchTextInput"
        className="searchbar__input"
        placeholder="Enter name, tag, email..."
        value={searchText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleOptionChange('searchText', e.target.value)
        }
      />
      <label htmlFor="searchTextInput" className="searchbar__label">
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
      <button className="searchbar__sort-btn" onClick={handleClickOpenModal}>
        <i className="fa-solid fa-bars"></i>
      </button>
      {isOpenModalSortOption && (
        <SortOptions
          sortBy={sortBy}
          onOptionChange={handleOptionChange}
          handleClickCloseModal={handleClickCloseModal}
        />
      )}
    </div>
  );
};

export default Searchbar;
