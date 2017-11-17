import React, {Component} from "react"
import StarRating from "./StarRating"
import PropTypes from "prop-types"
 
/*

// wondering if it's possible to replace props with just the actual prop and not the property name
const Color = ({number_stars=5, rating=0, title, color,onRemove,onRate}) => {
 	
	const colorStyle={
		backgroundColor:color,
		height:'50px',
	}
	return (
	<section className="color">

		<h1>{title}</h1>
		<button onClick={onRemove}>X</button>
		<div className="color-bar" style={ colorStyle} ></div>
		<StarRating number_stars={number_stars} rating={rating} onClickFN={onRate}/>
	</section>
	)
}

 
*/

class Color extends Component {
	static propTypes = {
		number_stars:PropTypes.number,
		title: PropTypes.string,
		rating: PropTypes.number,
		color: PropTypes.string,
		onRate: PropTypes.func,
		onRemove:PropTypes.func
	}
	componentWillMount(){
	
		this.colorStyle = {
				backgroundColor:"#CCC",
				height:'150px',
				width:'300px',
				border: "1px solid black",
				margin:'25px'
			}
		
	}

	shouldComponentUpdate(nextProps){
		const {rating}=this.props
		return rating != nextProps.rating	
	}

	render (){
	const {number_stars=5,rating=0,color,title,onRemove,onRate} = this.props
		console.log("color:", color)
		return (
		<section className="color" style={this.colorStyle}>

			<h1 ref="title">{title}<button onClick={onRemove}>X</button></h1>

			<div className="color-bar" style={{backgroundColor:color,height:50}}></div>
						<StarRating number_stars={number_stars} rating={rating} color={color} onClickFN={onRate}/>
		</section>
		)
	}

	componentWillUpdate(nextProps){
		const {title,rating} = this.props
		this.refs.title.style.backgroundColor="red"
		this.refs.title.style.color="white"
		//console.log(this.colorStyle)
		//alert(`${title}:rating ${rating} -> ${nextProps.rating}`)
		this.colorStyle={...this.colorStyle,backgroundColor:"#FFF"}
		//.log(this.colorStyle)
	}

	componentDidUpdate(prevProps){
		const {title,rating} = this.props
		const status = (rating > prevProps.rating) ? 'better' : 'worse'
		console.log(`${title} is getting ${status}`)
		this.colorStyle={...this.colorStyle,backgroundColor:"#CCC"}
	}
}

export default Color