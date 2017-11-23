import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../stylesheets/App.css';
import { AddColorContainer, MenuContainer, ColorContainer } from './Containers';

class App extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  componentWillMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="app">
        <AddColorContainer />
        <MenuContainer />
        <ColorContainer />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};

App.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
