import { compose } from 'redux';

export const findById = (array, id) => array.filter(item => item.id === id)[0];

const sortByDate = field => (a, b) => new Date(a[field]) - new Date(b[field]);
const sortByNumber = field => (a, b) => a[field] - b[field];
const sortByString = field =>
  (a, b) => (a[field].toLowerCase() < b[field].toLowerCase()) ?
    -1 : (a[field].toLowerCase() === b[field].toLowerCase()) ?
      0 : 1;

/**
* @param {String} sortByMethod - e.g. 'Title' field name to sort on
* @return {function} either a date sort, number sort, or string sort on
*       the field property of a compared object
*/
const getSortFunction = (sortByMethod) => {
  switch (sortByMethod) {
    case 'title':
      return sortByString('title');
    case 'rating':
      return sortByNumber('rating');
    default: // date
      return sortByDate('timestamp');
  }
};

export const sortColors = (colorsArray, sortByMethod) => compose(
  fn => [...colorsArray].sort(fn),
  getSortFunction,
)(sortByMethod);
