import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/app';
import storeFactory from './redux/store_factory';

const store = storeFactory();

ReactDOM.render(
  <MyApp store={store} />,
  document.getElementById('root'),
);
