import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import FilterOption from '../filter-oprion/FilterOption';
import { setFilter } from '../../state/employeesSlice';
import { RootState } from '../../store';
import type { PositionWork } from '../../state/employeesSlice';
import { updateURLParams } from '../common';
import './subbar.scss';

type Option = {
  id: number;
  option: PositionWork;
};

const listOfFilterOption: Option[] = [
  { id: 1, option: 'Все' },
  { id: 2, option: 'Designers' },
  { id: 3, option: 'Analysts' },
  { id: 4, option: 'Managers' },
  { id: 5, option: 'iOS' },
  { id: 6, option: 'Android' },
];

const Subbar = () => {
  const dispatch = useDispatch();
  const { jobTitle } = useSelector((state: RootState) => state.employees.filter);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const jobTitleFromURL = searchParams.get('jobTitle') || jobTitle;

    dispatch(setFilter({ "jobTitle": jobTitleFromURL }));
  }, [dispatch, searchParams]);

  const handleChangeFilter = (value: PositionWork): void => {
    dispatch(setFilter({ jobTitle: value }));
    updateURLParams('jobTitle', value, searchParams, setSearchParams);
  };

  return (
    <div className="subbar">
      {listOfFilterOption.map(({ id, option }) => (
        <FilterOption
          key={id}
          text={option}
          jobTitle={jobTitle}
          onOptionChange={handleChangeFilter}
        />
      ))}
    </div>
  );
};

export default Subbar;
