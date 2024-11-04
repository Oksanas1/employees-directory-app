import React from 'react';
import Searchbar from './components/searchbar';
import Subbar from './components/subbar';
import './index.scss';

const Navigation: React.FC = () => (
  <div className="navigation">
    <h2 className="navigation__title">Search</h2>
    <Searchbar />
    <Subbar />
  </div>
);

export default Navigation;
