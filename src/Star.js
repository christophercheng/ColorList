import React from 'react'
import PropTypes from 'prop-types';
import './Star.css';

const Star = ({selected=false,onClickFN=f=>f} ) => {
	return (
		<div className={(selected) ? "star selected":"star"}
			onClick={onClickFN}>
		</div>
	)
}

Star.propTypes={
	selected:PropTypes.bool,
	onClick:PropTypes.func
}

export default Star