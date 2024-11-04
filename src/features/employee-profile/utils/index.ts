export const formatTimestampToYears = (value: number): string => {
  const date: Date = new Date(value);
  const currentDate: Date = new Date();

  let yearsDifference: number = currentDate.getFullYear() - date.getFullYear();

  const isBeforeCurrentYear =
    currentDate.getMonth() < date.getMonth() ||
    (currentDate.getMonth() === date.getMonth() && currentDate.getDate() < date.getDate());

  if (isBeforeCurrentYear) {
    yearsDifference -= 1;
  }

  return `${yearsDifference} years`;
};

type TimeOptions = {
  day: '2-digit';
  month: 'long';
  year: 'numeric';
};

export const formatTimestampToFullDateString = (value: number): string => {
  const date: Date = new Date(value);
  const options: TimeOptions = { day: '2-digit', month: 'long', year: 'numeric' };

  const result: string = new Intl.DateTimeFormat('en-GB', options).format(date);

  return result;
};
