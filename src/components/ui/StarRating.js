import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const StarRatingStyle = {
  marginLeft: '20px',
};

const StarRating = ({ numberStars, rating, onClickFN }) => (
  <div className="star-rating" style={StarRatingStyle}>
    {[...Array(numberStars)].map((element, idx) => (
      <Star
        key={'star'.concat(idx)}
        selected={idx < rating}
        onClickFN={() => onClickFN(idx + 1)}
      />
    ))
  }
    <span>{rating}/{numberStars}</span>
  </div>
);

StarRating.defaultProps = {
  numberStars: 5,
  rating: 0,
  onClickFN: f => f,
};

StarRating.propTypes = {
  numberStars: PropTypes.number,
  rating: PropTypes.number,
  onClickFN: PropTypes.func,
};

export default StarRating;
