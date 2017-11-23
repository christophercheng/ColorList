import React from 'react';
import PropTypes from 'prop-types';
import C from './../../redux/constants';
import './../../stylesheets/menu.css';

const options = {
  date: C.SORT_BY_DATE,
  title: C.SORT_BY_TITLE,
  rating: C.SORT_BY_RATING,
};

const SortMenuList = ({ sort, handleSort }) => (
  <nav className="menu">
    <h1>Sort Colors</h1>
    {Object.keys(options).map((option, i) => (
      <a href="#" // eslint-disable-line
        key={option.concat(i)}
        className={(sort === options[option] ? 'selected' : '')}
        onClick={(e) => {
          e.preventDefault();
          handleSort(options[option]);
        }}
      >
        {option}
      </a>
    ))}
  </nav>
);

SortMenuList.propTypes = {
  sort: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default SortMenuList;
