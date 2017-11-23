import React from 'react';
import PropTypes from 'prop-types';
import './../../stylesheets/Star.css';

const Star = ({ selected, onClickFN }) =>
  (
    <div role="button" className={(selected) ? 'star selected' : 'star'} onClick={onClickFN} />
  );


Star.defaultProps = {
  selected: false,
  onClickFN: f => f,
};

Star.propTypes = {
  selected: PropTypes.bool,
  onClickFN: PropTypes.func,
};

export default Star;

