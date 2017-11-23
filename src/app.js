import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './stylesheets/App.css';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import SortMenu from './sort_menu';

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

  render = () => (
    <div className="App">
      <AddColorForm />
      <SortMenu />
      <ColorList />
    </div>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};

App.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
