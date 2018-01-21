import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import { compose } from 'redux';
import fs from 'fs';
import ignoreStyles from 'ignore-styles'; // eslint-disable-line                        
import path from 'path';
import express from 'express';
import { renderToString } from 'react-dom/server';
import MyApp from './components/app';
import storeFactory from './redux/store_factory';
import initialData from './redux/ColorData';

const staticCSS = fs.readFileSync(path.join(__dirname, '../build/static/css/main.711a70b7.css'));
const store = storeFactory(initialData);

const renderHTML = (url, myStore) => (
  {
    html: renderToString(
      <Provider store={myStore}>
        <StaticRouter location={url} context={{}}>
          <MyApp />
        </StaticRouter>
      </Provider>),
    state: myStore.getState(),
  }
);

const wrapperHTML = ({ html, state }) =>
  `
  <!DOCTYPE html>
  <html>
    <head>
      <title>ColorList React Lab</title>
      <style>${staticCSS}</style>
    </head>
    <body>
      <div id="client-root"><div>boobs and shit</div>${html}</div>
      <script>window.__INITIAL_STATE=${JSON.stringify(state)}</script>
      <script>
        setTimeout(function(){var script = document.createElement('script');
        script.src = "/main.d38b4373.js";
        alert('hey');
        document.getElementsByTagName('head')[0].appendChild(script);},4000);
        </script>
    </body>
  </html>
  `;

const renderedOutput = compose(wrapperHTML, renderHTML);


const render = (req, res) => {
  console.log('server request:', req.url);
  const url = req.url;
  res.status(200).send(renderedOutput(url, store));
};

express()
  .use(express.static(path.join(__dirname, '../build/static/js')))
  .use(render)
  .listen(3000, () => console.log('starting up!'));
