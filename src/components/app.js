import React from 'react';
import './../stylesheets/App.css';
import { AddColorContainer, MenuContainer, ColorContainer } from './Containers';

const App = () => (
  <div className="app">
    <AddColorContainer />
    <MenuContainer />
    <ColorContainer />
  </div>
);

export default App;
