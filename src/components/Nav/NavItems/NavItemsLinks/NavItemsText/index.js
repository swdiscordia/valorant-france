import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const NavItemsText = ({ text }) => (
  <li className="navbar-list-item">
    <a href="#">
      { text }
    </a>
  </li>
);

NavItemsText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavItemsText;
