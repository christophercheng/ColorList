import C from './constants';
import { v4 } from 'uuid';

export const removeColor = id => (
  {
    type: C.REMOVE_COLOR,
    id,
  }
);

export const rateColor = (id, rating) => (
  {
    type: C.RATE_COLOR,
    id,
    rating,
  }
);

export const addColor = (title, color) => (
  {
    type: C.ADD_COLOR,
    id: v4(),
    title,
    color,
    timestamp: new Date().toString(),
  }
);

export const sortBy = (sortMethod) => {
  switch (sortMethod) {
    case C.SORT_BY_DATE:
      return {*
        type: C.SORT_COLORS,
        sortBy: C.SORT_BY_DATE,
      };
    case C.SORT_BY_RATING:
      return {
        type: C.SORT_COLORS,
        sortBy: C.SORT_BY_RATING,
      };
    default:
      return {
        type: C.SORT_COLORS,
        sortBy: C.SORT_BY_TITLE,
      };
  }
};
