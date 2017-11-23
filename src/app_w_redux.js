import React from 'react';
import './stylesheets/App.css';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import SortMenu from './sort_menu';

const App = ({ store }) => (
  <div className="App">
    <AddColorForm store={store} />
    <SortMenu store={store} />
    <ColorList store={store} />
  </div>
);

export default App;
