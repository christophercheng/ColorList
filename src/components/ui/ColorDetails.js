import React from 'react';
const ColorDetails = (props) => {
  console.log('color details props:', props);
  return (
    <div
      className="color-details"
      style={{ backgroundColor: props.color }}
      onClick={() => props.history.goBack()}
    >
      <h1>{props.title}</h1>
      <h1>{props.color}</h1>
    </div>
  );
};

export default ColorDetails;
