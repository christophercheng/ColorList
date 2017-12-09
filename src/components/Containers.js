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
      handleAdd(title, color) {
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
      handleSort(sortBy) {
        dispatch(ActionCreator.sortBy(sortBy));
      },
    }),
)(SortMenu);

export const ColorsContainer = connect(
  state =>
    ({
      colors: [...state.colors].sort(sortFunction(state.sort)),
    }),
  dispatch =>
    ({
      handleRemove(id) {
        dispatch(ActionCreator.removeColor(id));
      },
      handleRate(id, rating) {
        dispatch(ActionCreator.rateColor(id, rating));
      },
    }),
)(ColorList);
