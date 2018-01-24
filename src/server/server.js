import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import { compose } from 'redux';
import fs from 'fs';
import ignoreStyles from 'ignore-styles'; // eslint-disable-line                        
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { renderToString } from 'react-dom/server';
import api from './colorlist-api';
import MyApp from './../components/app';
import storeFactory from './../redux/store_factory';
import initialData from './../redux/ColorData';

const staticCSS = fs.readFileSync(path.join(__dirname, '../../build/static/css/main.711a70b7.css'));
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
      <script>window.__INITIAL_STATE__=${JSON.stringify(state)}</script>
      <script src="/main.8db88373.js"></script>
    </body>
  </html>
  `;

const renderedOutput = compose(wrapperHTML, renderHTML);


const respond = (req, res) => {
  console.log('server request:', req.url, req.method, req.body);
  const url = req.url;
  res.status(200).send(renderedOutput(url, store));
};

const addStoreToPipeline = (req, res, next) => {
  req.store = store;
  next();
};

express()
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .use(express.static(path.join(__dirname, '../../build/static/js')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json()) // note that it used to be just bodyParser but that was deprecated
  .use(addStoreToPipeline)
  .use(api)
  .use(respond)
  .listen(3000, () => console.log('starting up!'));
