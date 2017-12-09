import StarRating from '../../src/components/ui/StarRating';

// use enzyme mount vs shallow function since we need to test for child of built component
describe('<StarRating /> UI Component', () => {
  it('renders 5 default stars', () =>
    expect(mount(<StarRating />).find('div.star').length).toEqual(5));
});
