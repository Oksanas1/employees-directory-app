import { formatTimestampToYears } from '..';

it('should return "0 years" for the current date', () => {
  const currentTimestamp = Date.now();
  expect(formatTimestampToYears(currentTimestamp)).toBe('0 years');
});

it('should return "1 year" for a date one year ago', () => {
  const oneYearAgo = new Date().setFullYear(new Date().getFullYear() - 1);
  expect(formatTimestampToYears(oneYearAgo)).toBe('1 years');
});

it('should return "10 years" for a date 10 years ago', () => {
  const tenYearsAgo = new Date().setFullYear(new Date().getFullYear() - 10);
  expect(formatTimestampToYears(tenYearsAgo)).toBe('10 years');
});

it('should return "100 years" for a date 100 years ago', () => {
  const hundredYearsAgo = new Date().setFullYear(new Date().getFullYear() - 100);
  expect(formatTimestampToYears(hundredYearsAgo)).toBe('100 years');
});
