import ColorList from '../../src/components/ui/ColorList';
import initialData from '../../src/redux/ColorData';

jest.mock('../../src/components/ui/Color', () =>
  ({ rating, onRate = f => f, onRemove = f => f}) => (
    <div className="mock-color">
      <button className="rate" onClick={() => onRate(rating)} />
      <button className="remove" onClick={() => onRemove()} />
    </div>
  ));

describe('<Colorlist /> UI Component', () => {
  describe('Default ColorList with no colors', () => {
    it('default message', () => {
      expect(shallow(<ColorList />)
        .find('p')
        .text(),
      ).toBe('No Colors Listed. (Add a color)');
    });

    it('Click default rate button no error', () => {
      mount(<ColorList colors={testColors} />).find('button.rate')
        .first()
        .simulate('click');
    });

    it('click default remove button no error', () => {
      mount(<ColorList colors={testColors} />).find('button.remove')
        .first()
        .simulate('click');
    });
  });

  describe('Rating a Color', () => {
    const mockFN1 = jest.fn();
    const mockFN2 = jest.fn();
    beforeAll(() => {
      mount(
        <ColorList
          colors={testColors}
          handleRemove={mockFN2}
          handleRate={mockFN1}
        />)
        .find('button.rate')
        .first()
        .simulate('click');
    });

    it('invokes handleRate', () => {
      expect(mockFN1).toBeCalled();
    });

    it('rates correct color', () => {
      expect(mockFN1).toBeCalledWith('0175d1f0-a8c6-41bf-8d02-df5734d829a4', 1);
    });
  });

  describe('Removing a Color', () => {
    const mockFN1 = jest.fn();
    const mockFN2 = jest.fn();
    beforeAll(() => {
      mount(
        <ColorList
          colors={testColors}
          handleRemove={mockFN2}
          handleRate={mockFN1}
        />)
        .find('button.remove')
        .at(1)
        .simulate('click');
    });

    it('invokes handleRemove', () => {
      expect(mockFN2).toBeCalled();
    });

    it('rates correct id', () => {
      expect(mockFN2).toBeCalledWith('83c7ba2f-7392-4d7d-9e23-35adbe186046');
    });
  });
});
