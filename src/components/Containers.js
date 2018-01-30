import { connect } from 'react-redux';
import { compose } from 'redux';
import AddColorForm from './ui/AddColorForm';
// mport SortMenu from './ui/sort_menu';
import ColorList from './ui/ColorList';

import * as ActionCreator from './../redux/action_creators';
import { sortColors } from './../lib/my-array-helpers';

export const AddColorContainer = connect(
  null,
  dispatch =>
    ({
      handleAdd(title, color) {
        dispatch(ActionCreator.addColor(title, color));
      },
    }),
)(AddColorForm);

// no longer needed now that sort is not managed by redux
/*
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
*/

export const ColorsContainer = connect(
  ({ colors }, { match }) =>
    ({
      colors: sortColors(colors, match.params.sort),
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

/*
const filterArrayById = (array, id) => array.filter(item => item.id === id);
const getFirstArrayItem = array => array[0];
const findById = compose(getFirstArrayItem, filterArrayById);


export const ColorDetailsContainer = connect(
  // return an prop id object e.g. {id: #582389235
  (state, props) => {
    console.log('props match params id: ', props.match.params.id);

    const colorObject = findById(state.colors, props.match.params.id);

    return colorObject;
  },
)(ColorDetails);
*/
