export const calculateSkeletonCount = (skeletonHeight: number): number => {
  const screenHeight = window.innerHeight;
  const skeletonCount = Math.ceil(screenHeight / skeletonHeight);
  return skeletonCount;
};
