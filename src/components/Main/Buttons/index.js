import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

import './style.scss';

const Buttons = () => (
  <div className="valorant-button">
    <NavLink to="/" exact className="transparent">
      <Button buttonText="Accueil" />
    </NavLink>
    <NavLink to="/agents" exact>
      <Button buttonText="Agents" />
    </NavLink>
    <NavLink to="/tips&tricks" exact className="white">
      <Button buttonText="Tips & Tricks" />
    </NavLink>
    <NavLink to="/news" exact className="grey">
      <Button buttonText="News" />
    </NavLink>
  </div>
);

export default Buttons;
