import React from 'react'
import PropTypes from 'prop-types';
import Star from './Star';

const StarRatingStyle={
	marginLeft:'20px'

}
const StarRating = ({number_stars=10,rating=0,onClickFN=f=>f}) => 
	
		<div className="star-rating" style={StarRatingStyle}>

			{[...Array(number_stars)].map((element,index)=>
				<Star key={index}
					selected={index<rating} 
					
					onClickFN={() => onClickFN(index+1)}
				/>
			)}
			<span>{rating}/{number_stars}</span>

		</div>



StarRating.propTypes = {
		number_stars:PropTypes.number,
		rating:PropTypes.number,
		onClickFN:PropTypes.func
	}

export default StarRating