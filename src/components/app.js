import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './../stylesheets/App.css';
import Menu from './ui/RouterMenu';
import { AddColorContainer, ColorsContainer } from './Containers';

const Loading = () => <div>Loading...</div>;

const LoadableColorDetailsContainer = Loadable({
  loader: () => import('./ColorDetailsContainer'),
  loading: Loading,
});

const App = () => (
  <Switch>
    <Route
      exact
      path="/:id"
      component={LoadableColorDetailsContainer}
    />
    <Route
      path="/"
      component={() => (
        <div className="app">
          <Route component={Menu} />
          <AddColorContainer />
          <Switch>
            <Route exact path="/" component={ColorsContainer} />
            <Route path="/sort/:sort" component={ColorsContainer} />
          </Switch>
        </div>
      )}
    />
  </Switch>
);

export default App;
