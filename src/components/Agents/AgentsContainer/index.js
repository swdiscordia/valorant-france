import React from 'react';
import AgentsTitle from './AgentsTitle';
import AgentsCards from './AgentsCards';


import './style.scss';

const AgentsContainer = () => (
  <div className="agent-container">
    <AgentsTitle />
    <AgentsCards />
  </div>
);

export default AgentsContainer;
