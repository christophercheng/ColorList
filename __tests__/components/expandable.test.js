import Expandable from '../../src/components/HOC/Expandable';

describe('Expandable Higher Order Component Testing', () => {
  let props;
  let wrapper;
  let ComposedComponent;
  const MockComponent = ({ expanded, toggleExpand }) => (
    <div onClick={toggleExpand}>
      {(expanded) ? 'expanded' : 'collapsed' }
    </div>
  );

  describe('Rendering UI', () => {
    beforeAll(() => {
      ComposedComponent = Expandable(MockComponent);
      wrapper = shallow(<ComposedComponent foo="foo" gnar="gnar" />);
      props = wrapper.find(MockComponent).props();
    });
    it('starts off collapsed', () =>
      expect(props.expanded).toBe(false));

    it('passes ToggleExpand function to composed component', () =>
      expect(typeof props.toggleExpand).toBe('function'));

    it('passes additional foo prop to composed component', () =>
      expect(props.foo).toBe('foo'));

    it('passes additional gnar prop to composed component', () =>
      expect(props.gnar).toBe('gnar'));
  });

  describe('Expand Collapse Functionality', () => {
    let instance;
    beforeAll(() => {
      ComposedComponent = Expandable(MockComponent);
      wrapper = shallow(<ComposedComponent expanded={false} />);
      instance = wrapper.instance();
    });

    it('renders the mock pnent as root element', () => {
      expect(wrapper.first().is(MockComponent));
    });

    it('starts off expanded', () => {
      expect(instance.state.expanded).toBe(false);
    });

    it('toggles to collapsed state', () => {
      instance.toggleExpand();
      expect(instance.state.expanded).toBe(true);
    });
  });
});
