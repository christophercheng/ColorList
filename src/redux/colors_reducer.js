import C from './constants';
import color from './color_reducer';

const colors = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return [
        ...state,
        color({}, action),
      ];
    case C.REMOVE_COLOR:
      return state.filter(c => c.id !== action.id);
    case C.RATE_COLOR:
      return state.map(c => color(c, action));
    default:
      return state;
  }
};

export default colors;

