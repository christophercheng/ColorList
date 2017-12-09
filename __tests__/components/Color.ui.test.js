import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Color from '../../src/components/ui/Color';

describe('<Color /> UI Component Test Suite', () => {
  it('Renders correct properties...', () => {
    const wrapperOutput = shallow(
      <Color
        title="Test Color"
        color="#F0F0F1"
        rating={3}
      />,
    );
    expect(toJSON(wrapperOutput)).toMatchSnapshot();
  });
});
