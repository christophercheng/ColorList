import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/app';
import storeFactory from './redux/store_factory';
import initialData from './redux/ColorData';

const store = storeFactory(initialData);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <MyApp />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
