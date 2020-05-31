import React from 'react';
import Nav from 'src/components/Nav';
import AgentsBackground from './AgentsBackground';
import AgentsContainer from './AgentsContainer';


import './style.scss';

const Agents = () => (
  <>
    <Nav />
    <AgentsBackground />
    <AgentsContainer />
  </>
);

export default Agents;
