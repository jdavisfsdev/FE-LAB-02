import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayersMain from '../../containers/PlayersMain';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <PlayersMain />
        </Route>
      </Switch>
    </Router>
  );
}
