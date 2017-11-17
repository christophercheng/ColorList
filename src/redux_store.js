import { createStore, combineReducers } from 'redux';
import colors from './reducers/colors_reducer';
import sort from './reducers/sort_reducer';
import colorData from './ColorData';
import C from './constants';

const initialData = {
  colors: colorData,
  sort: C.SORTED_BY_TITLE,
};

const store = createStore(combineReducers({ colors, sort }), initialData );

const unsubscribeLogLength = store.subscribe(() => console.log('color count:', store.getState().colors.length));

store.dispatch({
  type: C.ADD_COLOR,
  id: '2222e1p5-3abl-0p523-30e4-8001l8yf2222',
  title: 'Party Pink',
  color: '#F142FF',
  timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
});

store.dispatch({
  type: 'ADD_COLOR',
  id: '3315e1p5-3abl-0p523-30e4-8001l8yf2412',
  title: 'Big Blue',
  color: '#0000FF',
  timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
});

store.dispatch({
  type: 'RATE_COLOR',
  id: '2222e1p5-3abl-0p523-30e4-8001l8yf2222',
  rating: 5,
});

store.dispatch({
  type: 'REMOVE_COLOR',
  id: '3315e1p5-3abl-0p523-30e4-8001l8yf2412',
});

unsubscribeLogLength();


