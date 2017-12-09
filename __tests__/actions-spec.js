import C from '../src/constants';
import storeFactory from '../src/redux/store_factory';
import { addColor } from '../src/redux/action_creators';
import initialData from '../src/redux/ColorData';

describe('addColor Test', () => {
  const store = storeFactory(initialData);
  store.dispatch(addColor('Dark Blue', '#000033'));
  /*
  beforeAll(() => {
    store = storeFactory();
    store.dispatch(addColor('Dark Blue', '#000033'));
    });
  */

  it('Should add a new color', () =>
    expect(store.getState().colors.length).toBe(4));

  it('Should add a new unique gui id', () =>
    expect(store.getState().colors[3].id.length).toBe(36));

  it('Should set rating to 0', () =>
    expect(store.getState().colors[3].rating).toBe(0));

  it('should set timestamp', () =>
    expect(store.getState().colors[3].timestamp).toBeDefined());
});
