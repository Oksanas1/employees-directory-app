import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import SortOptions from '../sort-options/SortOptions';
import { RootState } from '../../store';
import { setFilter } from '../../state/employeesSlice';
import { updateURLParams } from '../common';
import './searchbar.scss';

const Searchbar: React.FC = () => {
  const [isOpenModalSortOption, setIsOpenModalSortOption] = useState(false);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { textFilter, sortBy } = useSelector((state: RootState) => state.employees.filter);

  useEffect(() => {
    const sortFromURL = searchParams.get('sortBy') || sortBy;
    const textFilterFromURL = searchParams.get('textFilter') || textFilter;

    dispatch(setFilter({ "textFilter": textFilterFromURL, 'sortBy': sortFromURL }));
  }, [dispatch]);

  const handleOptionChange = useCallback(
    (nameOption: string, value: string): void => {
      dispatch(setFilter({ [nameOption]: value }));
      updateURLParams(nameOption, value, searchParams, setSearchParams);
    },
    [dispatch, searchParams, setSearchParams],
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
        value={textFilter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleOptionChange('textFilter', e.target.value)
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
