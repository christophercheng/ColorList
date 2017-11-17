import React from 'react'
import Color from "./Color"

const ColorList = ({colors=[],onRate,onRemove}) => 

		<div className="color-list">
			{
				(colors.length===0) ? <p>No Colors Listed. (Add a color)</p> :
				colors.map((el) => 
					<Color key={el.id} onRate={(rating)=>onRate(el.id,rating)} onRemove={() => onRemove(el.id)} number_stars={5} {...el}/>)
			}
		</div>


export default ColorList