import React from 'react';
import Navigation from '../../../filter';
import { calculateSkeletonCount } from './config/culcItemToSculeton';

import './index.scss';

const SkeletonLoader: React.FC = () => {
  const skeletonCount = calculateSkeletonCount(70);
  return (
    <>
      <Navigation />
      <div className="skeleton">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <div key={index} className="skeleton__item">
            <div className="skeleton__image" />
            <div>
              <div className="skeleton__line-height" />
              <div className="skeleton__line" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkeletonLoader;
