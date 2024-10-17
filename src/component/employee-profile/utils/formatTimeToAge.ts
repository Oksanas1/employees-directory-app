const formatYearsToString = (years: number): string => {
  if (years % 10 === 1 && years % 100 !== 11) {
    return `${years} год`;
  }
  if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100)) {
    return `${years} года`;
  }

  return `${years} лет`;
};

export const formatTimestampToYears = (value: number): string => {
  const date: Date = new Date(value);
  const currentDate: Date = new Date();
  const yearsDifference: number = currentDate.getFullYear() - date.getFullYear();

  return formatYearsToString(yearsDifference);
};

type TimeOptions = {
  day: '2-digit';
  month: 'long';
  year: 'numeric';
};

export const formatTimestampToFullDateString = (value: number): string => {
  const date: Date = new Date(value);
  const options: TimeOptions = { day: '2-digit', month: 'long', year: 'numeric' };

  const result: string = date.toLocaleDateString('ru-RU', options);

  return result.slice(0, result.length - 3);
};
