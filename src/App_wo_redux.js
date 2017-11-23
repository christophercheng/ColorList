import { v4 } from 'uuid';
import React, { Component } from 'react';
import './stylesheets/App.css';
import colorData from './redux/ColorData';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

const AppStyle = {
  width: '200px',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = colorData;
  }

  onRate = (id, rating) => {
    const colors = this.state.colors.map(el => ((el.id === id) ? { ...el, rating } : el));
    this.setState({ colors });
  }

  onRemove = (id) => {
    const colors = this.state.colors.filter(el => el.id !== id);
    this.setState({ colors });
  };

  addColor = (title, color) => {
    const colors = [...this.state.colors,
      {
        color, title, rating: 0, id: v4(),
      },
    ];
    this.setState({ colors });
  };


  render = () => {
    const { colors } = this.state;
    return (
      <div className="App" style={AppStyle}>
        <AddColorForm onNewColorFN={this.addColor} />
        <ColorList colors={colors} onRemove={this.onRemove} onRate={this.onRate} />
      </div>
    );
  };
}

export default App;
