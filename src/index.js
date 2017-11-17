import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App as MyApp } from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
/*
const logColorFN = (title,color)=>
console.log(`New Color: ${title} | ${color}`)

*/

// ReactDOM.render(<AddColorForm  onNewColorFN={logColorFN}/>, document.getElementById('root'));
// ReactDOM.render(<StarRating number_stars={10} rating={5}/>, document.getElementById('root'));


ReactDOM.render(<MyApp />, document.getElementById('root'));

registerServiceWorker();
