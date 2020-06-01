import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

import AgentsTitle from './AgentsTitle';
import AgentsCards from './AgentsCards';


import './style.scss';

const AgentsContainer = () => (
  <div className="agent-container">
    <AgentsTitle />
    <div className="cards-wrapper">
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={1}
          navigation
          enableHeading
          currentFigureScale={1}
          otherFigureScale={0.8}
          media={{
            '@media (max-width: 900px)': {
              width: '100%',
              height: '700px',
            },
            '@media (min-width: 900px)': {
              width: '100%',
              height: '700px',
            },
          }}
        >
          <AgentsCards />
          <AgentsCards />
          <AgentsCards />
          <AgentsCards />
          <AgentsCards />
        </Coverflow>
      </StyleRoot>
    </div>
  </div>
);

export default AgentsContainer;
