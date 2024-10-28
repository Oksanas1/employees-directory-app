import { URLSearchParamsInit } from 'react-router-dom';

export const updateURLParams = (
  nameOption: string,
  value: string,
  searchParams: URLSearchParams,
  setSearchParams: (nextInit: URLSearchParamsInit) => void,
): void => {
  const newParams = new URLSearchParams(searchParams);

  if (value === '' || value === 'all' || value === 'nameSort') {
    newParams.delete(nameOption);
  } else {
    newParams.set(nameOption, value);
  }

  setSearchParams(newParams);
};
