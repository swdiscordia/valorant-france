// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import Main from 'src/components/Main';
import Agents from 'src/components/Agents';

import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Route path="/" exact>
      <Main />
    </Route>
    <Route path="/agents" exact>
      <Agents />
    </Route>
  </div>
);

// == Export
export default App;
