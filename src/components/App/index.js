// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import Main from 'src/components/Main';

// == Composant
const App = () => (
  <div className="app">
    <Route path="/" exact>
      <Main />
    </Route>
  </div>
);

// == Export
export default App;
