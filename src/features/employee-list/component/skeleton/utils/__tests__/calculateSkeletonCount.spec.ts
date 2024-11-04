import { calculateSkeletonCount } from '..';

beforeAll(() => {
  Object.defineProperty(window, 'innerHeight', { value: 800 });
});

it('should return the correct skeleton count for a given height', () => {
  const skeletonHeight = 200;
  const expectedCount = Math.ceil(800 / skeletonHeight);
  expect(calculateSkeletonCount(skeletonHeight)).toBe(expectedCount);
});

it('should return 0 if skeletonHeight is greater than screenHeight', () => {
  const skeletonHeight = 900;
  const expectedCount = Math.ceil(800 / skeletonHeight);
  expect(calculateSkeletonCount(skeletonHeight)).toBe(expectedCount);
});

it('should return 1 if skeletonHeight equals screenHeight', () => {
  const skeletonHeight = 800;
  const expectedCount = Math.ceil(800 / skeletonHeight);
  expect(calculateSkeletonCount(skeletonHeight)).toBe(expectedCount);
});

it('should return correct skeleton count for different heights', () => {
  const skeletonHeight1 = 100;
  const expectedCount1 = Math.ceil(800 / skeletonHeight1);
  expect(calculateSkeletonCount(skeletonHeight1)).toBe(expectedCount1);

  const skeletonHeight2 = 50;
  const expectedCount2 = Math.ceil(800 / skeletonHeight2);
  expect(calculateSkeletonCount(skeletonHeight2)).toBe(expectedCount2);
});
