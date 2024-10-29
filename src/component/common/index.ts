import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { setFilter } from '../../state/employeesSlice';

export const useCombinedURLParams = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchText, sortBy, position } = useSelector((state: RootState) => state.employees.filter);

  const initializeParams = useCallback(() => {
    const urlParams = {
      sortBy: searchParams.get('sortBy') || sortBy,
      searchText: searchParams.get('searchText') || searchText,
      position: searchParams.get('position') || position,
    };

    dispatch(setFilter(urlParams));

    const newParams = new URLSearchParams(searchParams);
    Object.entries(urlParams).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
    });
    setSearchParams(newParams);
  }, [dispatch, searchParams, setSearchParams, sortBy, searchText, position]);

  const updateCombinedParams = useCallback(
    (key: string, value: string) => {
      dispatch(setFilter({ [key]: value }));

      const newParams = new URLSearchParams(searchParams);
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
      setSearchParams(newParams);
    },
    [dispatch, searchParams, setSearchParams],
  );

  return { initializeParams, updateCombinedParams };
};
