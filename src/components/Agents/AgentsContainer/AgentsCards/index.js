import React from 'react';
import AgentInfos from './AgentInfos';
import AgentBackground from './AgentBackground';
import AgentSpell from './AgentSpell';

import './style.scss';

const AgentsCards = () => (
  <div className="cards-wrapper">
    <article className="agent-wrapper">
      <AgentInfos />
      <AgentBackground />
      <AgentSpell />
    </article>
  </div>
);

export default AgentsCards;
