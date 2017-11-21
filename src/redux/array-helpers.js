import C from './constants';

const sortBy = (type, field) => {
  switch (type) {
    case 'string':
      return (a, b) => ((a[field] > b[field]) ? 1 : -1);
    case 'number':
      return (a, b) => a[field] - b[field];
    default:
      return (a, b) => new Date(a[field]) - new Date(b[field]);
  }
};

const sortFunction = (sortMethod) => {
  switch (sortMethod) {
    case C.SORT_BY_TITLE:
      return sortBy('string', 'title');
    case C.SORT_BY_RATING:
      return sortBy('number', 'rating');
    default:
      return sortBy('date', 'timestamp');
  }
};

export default sortFunction;

