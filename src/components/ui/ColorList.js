import PropTypes from 'prop-types';
import React from 'react';
import Color from './Color';
import './../../stylesheets/ColorList.css';

const ColorList = ({ colors, handleRemove, handleRate }) => (
  <div className="color-list">
    {(colors.length === 0) ? <p>No Colors Listed. (Add a color)</p> :
      colors.map(el => (
        <Color
          key={el.id}
          onRate={rating => handleRate(el.id, rating)}
          onRemove={() => handleRemove(el.id)}
          number_stars={5}
          {...el}
        />
      ))}
  </div>
);

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,// eslint-disable-line
  handleRemove: PropTypes.func.isRequired,
  handleRate: PropTypes.func.isRequired,
};


export default ColorList;
