import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import MyApp from './components/app';
import storeFactory from './redux/store_factory';
//import initialData from './redux/ColorData';
const store = storeFactory(window.__INITIAL_STATE__);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('client-root'),
);
