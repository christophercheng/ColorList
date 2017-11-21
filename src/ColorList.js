import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import { rateColor, removeColor } from './redux/action_creators';
import sortFunction from './redux/array-helpers';

const ColorList = ({ store }) => {
  const { colors } = store.getState();
  return (
    <div className="color-list">
      {(colors.length === 0) ? <p>No Colors Listed. (Add a color)</p> :
        colors.map(el => (
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

ColorList.propTypes = {
  store: PropTypes.object, // eslint-disable-line
};

export default ColorList;
