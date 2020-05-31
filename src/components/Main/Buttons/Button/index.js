import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({ buttonText }) => (
  <p>
    <span className="bg" />
    <span className="base" />
    <span className="text">{buttonText}</span>
  </p>
);

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
