type TimeOptions = {
  day: '2-digit';
  month: 'short';
};

export const formatTimestampToDateString = (value: number): string => {
  const date = new Date(value);
  const options: TimeOptions = { day: '2-digit', month: 'short' };

  const result = new Intl.DateTimeFormat('en-GB', options).format(date);

  return result;
};
