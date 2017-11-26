import { connect } from 'react-redux';
import AddColorForm from './ui/AddColorForm';
import SortMenu from './ui/sort_menu';
import ColorList from './ui/ColorList';
import * as ActionCreator from './../redux/action_creators';
import sortFunction from './../redux/array-helpers';

export const AddColorContainer = connect(
  null,
  dispatch =>
    ({
      onNewColor(title, color) {
        dispatch(ActionCreator.addColor(title, color));
      },
    }),
)(AddColorForm);

export const MenuContainer = connect(
  state =>
    ({
      sort: state.sort,
    }),
  dispatch =>
    ({
      onSelect(sortBy) {
        dispatch(ActionCreator.sortBy(sortBy));
      },
    }),
)(SortMenu);

export const ColorContainer = connect(
  state =>
    ({
      colors: [...state.colors].sort(sortFunction(state.sort)),
    }),
  dispatch =>
    ({
      onRemove(id) {
        dispatch(ActionCreator.removeColor(id));
      },
      onRate(id, rating) {
        dispatch(ActionCreator.rateColor(id, rating));
      },
    }),
)(ColorList);
