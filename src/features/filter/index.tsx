import React from 'react';
import Searchbar from './searchbar';
import Subbar from './subbar';
import './index.scss';

const Navigation: React.FC = () => (
  <div className="navigation">
    <h2 className="navigation__title">Search</h2>
    <Searchbar />
    <Subbar />
  </div>
);

export default Navigation;
