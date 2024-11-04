import React, { useState, useEffect, useCallback } from 'react';
import SortOptions from '../sort-options';
import { useCombinedURLParams } from '../../hooks';
import './index.scss';

const Searchbar: React.FC = () => {
  const [isOpenModalSortOption, setIsOpenModalSortOption] = useState(false);
  const { initializeParams, updateCombinedParams, getSearchParams } = useCombinedURLParams();
  const { sortBy, searchText } = getSearchParams();

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
