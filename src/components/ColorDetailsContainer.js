import { connect } from 'react-redux';
import { compose } from 'redux';
import ColorDetails from './ui/ColorDetails';

const filterArrayById = (array, id) => array.filter(item => item.id === id);
const getFirstArrayItem = array => array[0];
const findById = compose(getFirstArrayItem, filterArrayById);

const ColorDetailsContainer = connect(
  // return an prop id object e.g. {id: #582389235
  (state, props) => {
    console.log('props match params id: ', props.match.params.id);

    const colorObject = findById(state.colors, props.match.params.id);

    return colorObject;
  },
)(ColorDetails);

export default ColorDetailsContainer;
