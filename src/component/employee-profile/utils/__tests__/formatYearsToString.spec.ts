import { formatYearsToString } from '../formatTimeToAge';

it('should return "1 год" for 1 year', () => {
  expect(formatYearsToString(1)).toBe('1 год');
});

it('should return "2 года" for 2 years', () => {
  expect(formatYearsToString(2)).toBe('2 года');
});

it('should return "5 лет" for 5 years', () => {
  expect(formatYearsToString(5)).toBe('5 лет');
});

it('should return "21 год" for 21 year', () => {
  expect(formatYearsToString(21)).toBe('21 год');
});

it('should return "22 года" for 22 years', () => {
  expect(formatYearsToString(22)).toBe('22 года');
});

it('should return "25 лет" for 25 years', () => {
  expect(formatYearsToString(25)).toBe('25 лет');
});

it('should return "111 лет" for 111 years', () => {
  expect(formatYearsToString(111)).toBe('111 лет');
});

it('should return "101 год" for 101 year', () => {
  expect(formatYearsToString(101)).toBe('101 год');
});

it('should return "102 года" for 102 years', () => {
  expect(formatYearsToString(102)).toBe('102 года');
});