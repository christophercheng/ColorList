import React from 'react';

const ColorDetails = props => (
  <div
    className="color-details"
    style={{ backgroundColor: props.color }}
    onClick={() => props.history.goBack()}
  >
    <h1>{props.title}</h1>
    <h1>{props.color}</h1>
  </div>
);


export default ColorDetails;
