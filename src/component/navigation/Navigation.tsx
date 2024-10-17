import React from 'react';
import Searchbar from '../searchbar/Searchbar';
import Subbar from '../subbar/Subbar';
import './navigation.scss';

const Navigation: React.FC = () => (
  <div className="navigation">
    <h2 className="navigation__title">Search</h2>
    <Searchbar />
    <Subbar />
  </div>
);

export default Navigation;
