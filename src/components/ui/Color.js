import FaTrash from 'react-icons/lib/fa/trash-o';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import StarRating from './StarRating';
import './../../stylesheets/Color.css';

class Color extends Component {
  static defaultProps = {
    numberStars: 5,
    title: 'A color',
    rating: 0,
    color: 'Blue',
    onRate: f => f,
    onRemove: f => f,
  }

  static propTypes = {
    numberStars: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func,
    onRemove: PropTypes.func,
  }

  static contextTypes = { store: PropTypes.object }

  render() {
    const { store } = this.context;
    console.log('color store:', store);
    const {
      numberStars, rating, color, title, onRemove, onRate,
    } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1 ref={(el) => { this.title = el; }}>{title}</h1>
        <button onClick={onRemove}><FaTrash /></button>
        <div className="color" style={{ backgroundColor: color }} />
        <div>
          <StarRating numberStars={numberStars} rating={rating} color={color} onClickFN={onRate} />
        </div>
      </section>
    );
  }
}


export default Color;
