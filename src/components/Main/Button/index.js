import React from 'react';

import './style.scss';

const Button = () => (
  <div className="valorant-button">
    <a href="#">
      <p>
        <span className="bg" />
        <span className="base" />
        <span className="text">Agents</span>
      </p>
    </a>
    <a className="white" href="#">
      <p>
        <span className="bg" />
        <span className="base" />
        <span className="text">Tips & Tricks</span>
      </p>
    </a>
    <a className="transparent" href="#">
      <p>
        <span className="bg" />
        <span className="base" />
        <span className="text">News</span>
      </p>
    </a>
  </div>
);

export default Button;
