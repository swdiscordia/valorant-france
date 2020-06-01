import React from 'react';
import AgentInfos from './AgentInfos';
import AgentSpell from './AgentSpell';

import './style.scss';

const AgentsCards = () => (
  <article className="agent-wrapper">
    <AgentInfos />
    <AgentSpell />
  </article>
);

export default AgentsCards;
