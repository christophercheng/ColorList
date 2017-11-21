import React from 'react';
import './App.css';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

const AppStyle = {
  width: '250px',
};

const App = ({ store }) => (
  <div className="App" style={AppStyle}>
    <AddColorForm store={store} />
    <ColorList store={store} />
  </div>
);

export default App;
