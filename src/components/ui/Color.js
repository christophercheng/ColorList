import FaTrash from 'react-icons/lib/fa/trash-o';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
    const {
      id, numberStars, rating, color, title, onRemove, onRate, history, //eslint-disable-line
    } = this.props;
    return (
      <section
        className="color"
        style={this.style}
      >
        <h1
          ref={(el) => { this.title = el; }}
          onClick={() => history.push(`/${id}`)}
        >
          {title}
        </h1>
        <button onClick={onRemove}><FaTrash /></button>
        <div
          className="color"
          style={{ backgroundColor: color }}
          onClick={() => history.push(`/${id}`)}
        />
        <div>
          <StarRating numberStars={numberStars} rating={rating} color={color} onClickFN={onRate} />
        </div>
      </section>
    );
  }
}


export default withRouter(Color);
