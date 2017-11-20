import storeFactory from './store_factory';
import * as actionCreators from './action_creators';


const store = storeFactory();

store.dispatch(actionCreators.addColor('#FFFFFF', 'Bright White'));
store.dispatch(actionCreators.addColor('#00FF00', 'Lawn'));
store.dispatch(actionCreators.addColor('#0000FF', 'Big Blue'));
