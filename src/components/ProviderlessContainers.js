import PropTypes from 'prop-types';
import React from 'react';
import SortMenu from './ui/sort_menu';
import AddColorForm from './ui/AddColorForm';
import ColorList from './ui/ColorList';
import * as ActionCreator from './../redux/action_creators';
import sortFunction from './../redux/array-helpers';

export const AddColorContainer = (props, { store }) => (
  <AddColorForm handleAdd={(title, color) =>
    store.dispatch(ActionCreator.addColor(title, color))}
  />
);

AddColorContainer.contextTypes = {
  store: PropTypes.object,
};

export const MenuContainer = (props, { store }) => (
  <SortMenu
    sort={store.getState().sort}
    handleSort={sortMethod =>
      store.dispatch(ActionCreator.sortBy(sortMethod))}
  />
);

MenuContainer.contextTypes = {
  store: PropTypes.object,
};

export const ColorContainer = (props, { store }) => {
  const { colors, sort } = store.getState();
  const sortedColors = colors.sort(sortFunction(sort));
  return (
    <ColorList
      colors={sortedColors}
      handleRemove={
        id => store.dispatch(ActionCreator.removeColor(id))
      }
      handleRate={
        (id, rating) => store.dispatch(ActionCreator.rateColor(id, rating))
      }
    />
  );
};

ColorContainer.contextTypes = {
  store: PropTypes.object,
};

/*
export default {
  AddColorContainer,
  MenuContainer,
  ColorContainer,
};
*/
