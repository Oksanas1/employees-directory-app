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

  const initializeParams = useCallback((): FilterOption => {
    const urlParams = {
      sortBy: getURLParams('sortBy', 'nameSort') as SortOption,
      searchText: getURLParams('searchText', ''),
      position: getURLParams('position', 'all') as EmployeePosition,
    };

    const newParams = new URLSearchParams(searchParams);
    Object.entries(urlParams).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
    });
    setSearchParams(newParams);
    return urlParams;
  }, [searchParams, setSearchParams]);

  const updateCombinedParams = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams);

      if (value) {
        newParams.set(key, value);
        localStorage.setItem(`${key}`, value);
      } else {
        newParams.delete(key);
      }
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  const getSearchParams = (): FilterOption => ({
    sortBy: getURLParams('sortBy', 'nameSort') as SortOption,
    searchText: getURLParams('searchText', ''),
    position: getURLParams('position', 'all') as EmployeePosition,
  });

  return { initializeParams, updateCombinedParams, getSearchParams };
};
