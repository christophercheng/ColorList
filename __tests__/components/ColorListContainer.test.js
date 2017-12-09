import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { ColorsContainer } from '../../src/components/containers';

jest.mock('../../src/components/ui/ColorList');

describe('<Colors /> Container ', () => {
  let wrapper;
  const _store = {
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn(() => ({
      sort: 'SORTED_BY_DATE',
      colors: testColors,
    })),
  };

  beforeAll(() => {
    wrapper = mount(
      <Provider store={_store}>
        <ColorsContainer />
      </Provider>);
  });

  it('renders three colors', () => {
    expect(wrapper.find('ColorListMock').props().colors.length).toBe(3);
  });

  it('sorts the colors by date', () => {
    expect(wrapper
      .find('ColorListMock')
      .props()
      .colors[0]
      .title).toBe('bright red');
  });

  afterEach(() => jest.resetAllMocks());

  it('handleRate is called and RATE_COLOR dispatched', () => {
    // use the provider wrapper to find colorlistmock, 
    // grab its props, call handleRate on it with a given id, and rating
    wrapper.find('ColorListMock').props().handleRate(
      '0175d1f0-a8c6-41bf-8d02-df5734d829a4', 5);

    expect(_store.dispatch.mock.calls[0][0]).toEqual({
      type: 'RATE_COLOR',
      id: '0175d1f0-a8c6-41bf-8d02-df5734d829a4',
      rating: 5,
    });
  });

  it('handleRemove is called & REMOVE_COLOR dispatched', () => {
    // use the provider wrapper to find colorlistmock,
    // grab its props, call handleRemove on it with a given id
    wrapper.find('ColorListMock').props().handleRemove(
      '0175d1f0-a8c6-41bf-8d02-df5734d829a4');

    expect(_store.dispatch.mock.calls[0][0]).toEqual({
      type: 'REMOVE_COLOR',
      id: '0175d1f0-a8c6-41bf-8d02-df5734d829a4',
    });
  });
});
