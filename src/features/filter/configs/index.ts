import type { EmployeePosition, SortOption } from '../../../entities/employee/types';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export type FilterOption = {
  searchText: string;
  position: EmployeePosition;
  sortBy: SortOption;
};

export const useCombinedURLParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getURLParams = (key: string, defaultValue: string) =>
    searchParams.get(key) || localStorage.getItem(key) || defaultValue;

  const urlParams: FilterOption = {
    sortBy: getURLParams('sortBy', 'nameSort') as SortOption,
    searchText: getURLParams('searchText', ''),
    position: getURLParams('position', 'all') as EmployeePosition,
  };

  const initializeParams = useCallback(() => {
    // const urlParams: FilterOption = {
    //   sortBy: getURLParams('sortBy', 'nameSort') as SortOption,
    //   searchText: getURLParams('searchText', ''),
    //   position: getURLParams('position', 'all') as EmployeePosition,
    // };

    const newParams = new URLSearchParams(searchParams);
    Object.entries(urlParams).forEach(([key, value]) => {
      if (value !== '' && value !== 'nameSort' && value !== 'all') {
        newParams.set(key, value);
      }
      localStorage.setItem(`${key}`, value);
    });
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const updateCombinedParams = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams);

      if (value !== '' && value !== 'nameSort' && value !== 'all') {
        newParams.set(key, value);
        localStorage.setItem(`${key}`, value);
      } else {
        newParams.delete(key);
        localStorage.setItem(`${key}`, value);
      }
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  const getSearchParams = (): FilterOption => urlParams;

  return { initializeParams, updateCombinedParams, getSearchParams };
};
