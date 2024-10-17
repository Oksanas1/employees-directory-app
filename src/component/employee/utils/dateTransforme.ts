type TimeOptions = {
  day: '2-digit';
  month: 'short';
};

export const formatTimestampToDateString = (value: number): string => {
  const date = new Date(value);
  const options: TimeOptions = { day: '2-digit', month: 'short' };

  const result = date.toLocaleDateString('ru-RU', options);

  return result.slice(0, result.length - 1);
};
