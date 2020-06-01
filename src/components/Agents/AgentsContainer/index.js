import React from 'react';
import AgentsTitle from './AgentsTitle';
import AgentsCards from './AgentsCards';


import './style.scss';

const AgentsContainer = () => (
  <div className="agent-container">
    <AgentsTitle />
    <div className="cards-wrapper">
      <AgentsCards />
      <AgentsCards />
      <AgentsCards />
      <AgentsCards />
    </div>
  </div>
);

export default AgentsContainer;
