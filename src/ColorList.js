import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import { rateColor, removeColor } from './redux/action_creators';
import sortFunction from './redux/array-helpers';
import './stylesheets/ColorList.css';

const ColorList = (props, { store }) => {
  const { colors, sort } = store.getState();
  const sortedColors = colors.sort(sortFunction(sort));
  return (
    <div className="color-list">
      {(colors.length === 0) ? <p>No Colors Listed. (Add a color)</p> :
        sortedColors.map(el => (
          <Color
            key={el.id}
            onRate={(rating) => { store.dispatch(rateColor(el.id, rating)); }}
            onRemove={() => { store.dispatch(removeColor(el.id)); }}
            number_stars={5}
            {...el}
          />
        ))}
    </div>
  );
};

ColorList.contextTypes = {
  store: PropTypes.object,
};

ColorList.propTypes = {
  store: PropTypes.object, // eslint-disable-line
};

export default ColorList;
