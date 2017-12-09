import React from 'react';
import PropTypes from 'prop-types';
import './../../stylesheets/Star.css';

const Star = ({ selected = false, onClickFN = f => f }) =>
  (
    <div role="button" className={(selected) ? 'star selected' : 'star'} onClick={onClickFN} /> //eslint-disable-line
  );

Star.propTypes = {
  selected: PropTypes.bool,
  onClickFN: PropTypes.func,
};

export default Star;

