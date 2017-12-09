import Star from '../../src/components/ui/Star';

describe('<Star /> UI Component', () => {
  it('renders default star', () =>
    expect(
      shallow(<Star selected={false} onClickFN={f => f} />).find('div.star').length
      ).toEqual(1)
    );
  it('renders selected stars', () =>
    expect(
      shallow(<Star selected={true} onClickFN={f => f} />)
        .find('div.selected.star')
        .length
        ).toEqual(1)
    );
  it('invokes onClick', () => {
    const _click = jest.fn();
    shallow(<Star 
      onClickFN={_click}
      selected={true}
      />).find('div.star').simulate('click', { preventDefault() {} });
    expect(_click).toBeCalled();
  });
});
