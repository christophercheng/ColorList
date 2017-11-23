import React from 'react';
import C from './redux/constants';
import { sortBy } from './redux/action_creators';
import './stylesheets/menu.css';

const options = {
  date: C.SORT_BY_DATE,
  title: C.SORT_BY_TITLE,
  rating: C.SORT_BY_RATING,
};

const SortDropDown = ({ store }) => {
  const onChange = (e) => {
    e.preventDefault();
    store.dispatch(sortBy(this.select.value));
  };

  return (
    <nav>
      <h1>Sort Colors</h1>
      <select ref={(el) => { this.select = el; }} onChange={onChange}>
        {Object.keys(options).map((option, i) =>
          <option key={option.concat(i)} value={options[option]}>{option}</option>)}
      </select>
    </nav>
  );
};

const SortMenuList = ({ store }) => (
  <nav className="menu">
    <h1>Sort Colors</h1>
    {Object.keys(options).map((option, i) => (
      <a href="#"
        key={option.concat(i)}
        className={(store.getState().sort === options[option] ? 'selected' : '')}
        onClick={(e) => {
          e.preventDefault();
          store.dispatch(sortBy(options[option]));
        }}
      >
        {option}
      </a>
    ))}
  </nav>
);

export default SortMenuList;
// export default SortDropDown;
