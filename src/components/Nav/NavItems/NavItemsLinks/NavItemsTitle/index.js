import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const NavItemsTitle = ({ title }) => (
  <li className="navbar-list-item">
    <a href="#">
      <h1 className="navbar-title">{title}</h1>
    </a>
  </li>
);

NavItemsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavItemsTitle;
