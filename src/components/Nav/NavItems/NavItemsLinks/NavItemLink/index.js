import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NavItemLink = ({ text, route }) => (
  <li className="navbar-list-item">
    <NavLink to={route} exact className="navbar-list-item-links">
      {text}
    </NavLink>
  </li>
);

NavItemLink.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavItemLink;
