import { formatPhoneNumber } from '../formatPhoneNumber';

beforeAll(() => {
  Object.defineProperty(window, 'innerHeight', { value: 800 });
});

it('should format phone number correctly', () => {
  const input = '1-800-555-1234';
  const expectedOutput = '1 (800) 555 12 34';
  expect(formatPhoneNumber(input)).toBe(expectedOutput);
});

it('should handle phone numbers with different lengths', () => {
  const input = '44-20-1234-5678';
  const expectedOutput = '44 (20) 1234 56 78';
  expect(formatPhoneNumber(input)).toBe(expectedOutput);
});

it('should handle single-digit area codes', () => {
  const input = '1-2-555-1234';
  const expectedOutput = '1 (2) 555 12 34';
  expect(formatPhoneNumber(input)).toBe(expectedOutput);
});

it('should handle empty string input', () => {
  const input = '';
  const expectedOutput = '';
  expect(formatPhoneNumber(input)).toBe(expectedOutput);
});

it('should handle missing parts gracefully', () => {
  const input = '1-800-555';
  const expectedOutput = '1 800 555';
  expect(formatPhoneNumber(input)).toBe(expectedOutput);
});
