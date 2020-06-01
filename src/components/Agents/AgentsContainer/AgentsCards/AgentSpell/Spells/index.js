import React from 'react';

import './style.scss';

const Spells = ({ spellSvg }) => (
  <>
    <img className="spell" src={spellSvg} alt="agent spell" />
  </>
);

export default Spells;
