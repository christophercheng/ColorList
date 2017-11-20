// redux store that keeps track of a counter
import { createStore, applyMiddleware } from 'redux';

/*
// reducer has two action types: increment and decrement a counter
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return (state > 0) ? state - 1 : 0;
    default:
      return state;
  }
};

const counterStore = createStore(reducer, 0);

counterStore.subscribe(() => { console.log(counterStore.getState()); });

counterStore.dispatch({ type: 'INCREMENT' }); // Prints "1"
counterStore.dispatch({ type: 'INCREMENT' });
counterStore.dispatch({ type: 'INCREMENT' });
counterStore.dispatch({ type: 'DECREMENT' });
*/
/*

Your stopwatch application needs the ability to display the amount of time elapsed.
The right way to do this is for your reducer to listen for 3 actions:

START_TIMER, fired when the timer starts
TICK, fired when you should change the current amount of time elapsed
STOP_TIMER, fired when you're not going to receive any more TICK actions.

*/
// action creators

const stopWatchReducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        startTime: Date.now(),
        elapsedTime: 0,
        lastTask: 'START_TIMER',
        tickInterval: action.tickInterval,
      };
    case 'TICK_TIMER':
      return {
        ...state,
        elapsedTime: (Date.now() - state.startTime) / 1000,
        lastTask: 'TICK_TIMER',
      };
    case 'STOP_TIMER':
      return {
        ...state,
        elapsedTime: (Date.now() - state.startTime) / 1000,
        tickInteral: null,
        lastTask: 'STOP_TIMER',
      };
    case 'PAUSE_5SECS':
      console.log('reducing PAUSE_5SECS');
      return {
        ...state,
        elapsedTime: (Date.now() - state.startTime) / 1000,
        lastTask: 'PAUSE_5SECS',
      };
    default:
      return {
        ...state,
        elapsedTime: (Date.now() - state.startTime) / 1000,
        lastTask: `UNKMOWN_TASK - ${action.type}`,
      };
      return state;
  }
};

const logMiddleware = store => next => (action) => {
  console.log('logging action type: ', action.type);
  next(action);
};

const timerMiddleware = store => next => (action) => {
  const newAction = { ...action };
  switch (action.type) {
    case 'START_TIMER':
      newAction.tickInterval = setInterval(() => store.dispatch({ type: 'TICK_TIMER' }), 1000);
      return next(newAction);
    case 'STOP_TIMER':
      clearInterval(store.getState().tickInterval);
      return next(newAction);
    case 'PAUSE_5SECS':
      console.log('initiating MW PAUSE_5SECS');
      return setTimeout(() => next(newAction), 5000);
    default:
  }
  return next(newAction);
};

const middleware = applyMiddleware(timerMiddleware, logMiddleware);
const store = createStore(stopWatchReducer, middleware);
const logUnsubscribe = store.subscribe(() =>
  console.log(store.getState().lastTask, ': elapsed time: ', store.getState().elapsedTime));


setTimeout(() => store.dispatch({ type: 'START_TIMER' }), 0);
setTimeout(() => store.dispatch({ type: 'PAUSE_5SECS' }), 0);
setTimeout(() => store.dispatch({ type: 'STOP_TIMER' }), 4000);
setTimeout(() => logUnsubscribe(), 10000);
