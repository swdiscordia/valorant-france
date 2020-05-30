import React from 'react';

import './style.scss';

const Button = ({ classModifier, buttonText }) => (
  <a href="#" className={classModifier}>
    <p>
      <span className="bg" />
      <span className="base" />
      <span className="text">{buttonText}</span>
    </p>
  </a>
);

export default Button;
