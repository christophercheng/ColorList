import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './../stylesheets/App.css';
import Menu from './ui/RouterMenu';
import { AddColorContainer, ColorsContainer, ColorDetailsContainer } from './Containers';

const App = () => (
  <Switch>
    <Route
      exact
      path="/:id"
      component={ColorDetailsContainer}
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
