import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayersMain from '../../containers/PlayersMain';
import { NotFound } from '../NotFound';
import PlayerDetail from '../PlayerDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <PlayersMain />
        </Route>
        <Route exact={true} path="/api/:id">
          <PlayerDetail />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
