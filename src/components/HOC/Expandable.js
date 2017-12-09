// Higher order Componentk
// ** input: a UI component to render
// ** state: state boolean default to expanded
// sends the state expanded as a prop
import React, { Component } from 'react';

const Expandable = ComposedComponent =>
  class AnonClass extends Component {
    constructor(props) {
      super(props);
      const expanded = (props.hidden) ? props.hidden : false;
      this.state = {
        expanded,
      };
    }

    toggleExpand = () => {
      this.setState({
        expanded: !this.state.expanded,
      });
    }

    render() {
      return (
        <ComposedComponent
          toggleExpand={this.toggleExpand}
          {...this.state}
          {...this.props}
        />
      );
    }
  };

export default Expandable;
