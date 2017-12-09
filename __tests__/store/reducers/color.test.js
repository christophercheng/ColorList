import deepFreeze from 'deep-freeze';
import C from '../../../src/redux/constants';
import colorReducer from '../../../src/redux/color_reducer';

describe('Color Reducer Test', () => {
  it('ADD_COLOR success', () => {
    const state = {};
    const action = {
      type: C.ADD_COLOR,
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: new Date().toString(),
    };
    const results = colorReducer(state, action);
    expect(results).toEqual({
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: action.timestamp,
      rating: 0,
    });
  });

  it('RATE_COLOR success', () => {
    const state = {
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
      rating: undefined,
    };
    const action = {
      type: C.RATE_COLOR,
      id: 0,
      rating: 3,
    };
    deepFreeze(state);
    deepFreeze(action);
    const results = colorReducer(state, action);
    expect(results).toEqual({
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
      rating: 3,
    });
  });
});
