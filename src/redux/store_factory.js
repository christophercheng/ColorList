import { createStore, combineReducers, applyMiddleware } from 'redux';
import colors from './colors_reducer';
import sort from './sort_reducer';
import initialData from './ColorData';

const localStorage = {};

const logger = store => next => (action) => {
  // console.groupCollapsed('dispatching', action.type);
  console.log('prev state:', store.getState());
  console.log('action:', action);
  next(action);
  console.log('next state:', store.getState());
  // console.groupEnd();
};

const saver = store => next => (action) => {
  const result = next(action);
  localStorage['redux-store'] = JSON.stringify(store.getState());
  return result;
};

/*
const storeFactory = (initialState = initialData) =>
  applyMiddleware(logger, saver)(createStore)(combineReducers({ colors, sort }), initialState);
*/

const storeFactory = () =>
  createStore(combineReducers({ colors, sort }), initialData, applyMiddleware(logger, saver));

export default storeFactory;
