import { formatTimestampToFullDateString } from '../formatTimeToAge';

it('should format a valid timestamp to a full date string', () => {
  const timestamp = new Date('2024-10-18T00:00:00Z').getTime();
  const formattedDate = formatTimestampToFullDateString(timestamp);
  expect(formattedDate).toBe('18 октября 2024');
});

it('should handle a timestamp for a leap year date', () => {
  const timestamp = new Date('2020-02-29T00:00:00Z').getTime();
  const formattedDate = formatTimestampToFullDateString(timestamp);
  expect(formattedDate).toBe('29 февраля 2020');
});
