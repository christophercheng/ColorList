import React from 'react';
import PropTypes from 'prop-types';
import './Star.css';

const Star = ({ selected, onClickFN }) =>
  (
    <button className={(selected) ? 'star selected' : 'star'} onClick={onClickFN} />
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

