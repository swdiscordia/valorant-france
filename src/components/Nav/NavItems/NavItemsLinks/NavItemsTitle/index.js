import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NavItemsTitle = ({ title, route }) => (
  <li className="navbar-list-item navbar-list-item-title">
    <NavLink to={route} className="navbar-list-item-links">
      <h1 className="navbar-title">{title}</h1>
    </NavLink>
  </li>
);

NavItemsTitle.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavItemsTitle;
