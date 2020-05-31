import React from 'react';
import NavItemsLinks from './NavItemsLinks';
import Authentification from './Authentification';

import './style.scss';

const NavItems = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <NavItemsLinks />
    </ul>
    <Authentification />
  </nav>
);

export default NavItems;
