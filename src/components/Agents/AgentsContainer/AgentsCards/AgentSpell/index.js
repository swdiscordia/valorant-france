import React from 'react';

import Spells from './Spells';
import './style.scss';

const AgentSpell = () => (
  <div className="agent-spell">
    <Spells spellSvg="/images/valorant-ressources/spells/Phoenix/curveball.svg" />
    <Spells spellSvg="/images/valorant-ressources/spells/Phoenix/hot-hands.svg" />
    <Spells spellSvg="/images/valorant-ressources/spells/Phoenix/run-it-back.svg" />
    <Spells spellSvg="/images/valorant-ressources/spells/Phoenix/blaze.svg" />
  </div>
);

export default AgentSpell;
