import React from 'react';
import './../stylesheets/App.css';
import { AddColorContainer, MenuContainer, ColorsContainer } from './Containers';

const App = () => (
  <div className="app">
    <AddColorContainer />
    <MenuContainer />
    <ColorsContainer />
  </div>
);

export default App;
