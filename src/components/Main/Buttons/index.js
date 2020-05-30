import React from 'react';
import Button from './Button';

import './style.scss';

const Buttons = () => (
  <div className="valorant-button">
    <Button buttonText="Agents" />
    <Button buttonText="Tips & Tricks" classModifier="white" />
    <Button buttonText="News" classModifier="transparent" />
  </div>
);

export default Buttons;
