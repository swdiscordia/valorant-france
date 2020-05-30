import React from 'react';

import './style.scss';

const Button = () => (
  <div className="valorant-button">
    <a href="#">
      <p>
        <span className="bg" />
        <span className="base" />
        <span className="text">Play Valorant</span>
      </p>
    </a>
    <a className="white" href="#">
      <p>
        <span className="bg" />
        <span className="base" />
        <span className="text">Play Valorant</span>
      </p>
    </a>
    <a className="transparent" href="#">
      <p>
        <span className="bg" />
        <span className="base" />
        <span className="text">Play Valorant</span>
      </p>
    </a>
  </div>
);

export default Button;
