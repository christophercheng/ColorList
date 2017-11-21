import React, { Component } from 'react';
import StarRating from './StarRating';
import PropTypes from 'prop-types';

/*
// wondering if it's possible to replace props with just the actual prop and not the property name
const Color = ({number_stars=5, rating=0, title, color,onRemove,onRate}) => {
  
  const colorStyle={
    backgroundColor:color,
    height:'50px',
  }
  return (
  <section className='color'>

    <h1>{title}</h1>
    <button onClick={onRemove}>X</button>
    <div className='color-bar' style={ colorStyle} ></div>
    <StarRating number_stars={number_stars} rating={rating} onClickFN={onRate}/>
  </section>
  )
}
*/

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

  componentWillMount() {
    this.colorStyle = {
      backgroundColor: '#CCC',
      height: '150px',
      width: '300px',
      border: '1px solid black',
      margin: '25px',
    };
  }

  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;
    return rating !== nextProps.rating;
  }

  componentWillUpdate(nextProps) {
    this.title.style.backgroundColor = 'red';
    this.title.style.color = 'white';
    this.colorStyle = { ...this.colorStyle, backgroundColor: '#FFF' };
  }

  componentDidUpdate(prevProps) {
    const { title, rating } = this.props;
    const status = (rating > prevProps.rating) ? 'better' : 'worse';
    console.log(`${title} is getting ${status}`);
    this.colorStyle = { ...this.colorStyle, backgroundColor: '#CCC' };
  }

  render() {
    const {
      numberStars, rating, color, title, onRemove, onRate,
    } = this.props;
    return (
      <section className="color" style={this.colorStyle}>
        <h1 ref={(el) => { this.title = el; }}>{title}<button onClick={onRemove}>X</button></h1>
        <div className="color-bar" style={{ backgroundColor: color, height: 50 }} />
        <StarRating numberStars={numberStars} rating={rating} color={color} onClickFN={onRate} />
      </section>
    );
  }
}

export default Color;
