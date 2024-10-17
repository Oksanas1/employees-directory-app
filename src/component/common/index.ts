import { URLSearchParamsInit } from 'react-router-dom';

export const updateURLParams = (
  nameOption: string,
  value: string,
  searchParams: URLSearchParams,
  setSearchParams: (nextInit: URLSearchParamsInit) => void,
): void => {
  const newParams = new URLSearchParams(searchParams);

  if (value) {
    newParams.set(nameOption, value);
  } else {
    newParams.delete(nameOption);
  }

  setSearchParams(newParams);
};
