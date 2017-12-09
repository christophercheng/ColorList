import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/app';
import storeFactory from './redux/store_factory';
import initialData from './redux/ColorData';

const store = storeFactory(initialData);

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root'),
);
