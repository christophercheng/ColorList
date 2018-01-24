import axios from 'axios';
import C from './constants';

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

// non SSR version\
/*
export const addColor = (title, color) => (
  {
    type: C.ADD_COLOR,
    id: v4(),
    title,
    color,
    timestamp: new Date().toString(),
  }
);
*/
// SSR version

/*
export const addColor = (title, color) => (dispatch, getState) => {
  // make call to server api via promise
  const bodyString = JSON.stringify({ title: 'fuck', color: 'fckthat' });
  console.log('POSTING: ', bodyString);

  axios.post('/colors', { title, color })
    .then((res) => {
      console.log('axios response:', res);
      dispatch(res.data);
    })
    .catch(error => console.error('what the fuck', error));
};

*/

export const addColor = (title, color) => (dispatch, getState) => {
  // make call to server api via promise
  const bodyString = JSON.stringify({ title: 'fuck', color: 'fckthat' });
  console.log('POSTING: ', bodyString);

  fetch('/colors', {
    method: 'POST',
    body: JSON.stringify({ title, color }),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(res => res.json())
    .then((res) => {
      console.log('axios response:', res);
      dispatch(res);
    })
    .catch(error => console.error('what the fuck', error));
};

export const sortBy = (sortMethod) => {
  switch (sortMethod) {
    case C.SORT_BY_DATE:
      return {
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
