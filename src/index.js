import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import MyApp from './app_w_redux';
import storeFactory from './redux/store_factory';


// ReactDOM.render(<App />, document.getElementById('root'));
/*
const logColorFN = (title,color)=>
console.log(`New Color: ${title} | ${color}`)

*/

// ReactDOM.render(<AddColorForm  onNewColorFN={logColorFN}/>, document.getElementById('root'));
// ReactDOM.render(<StarRating number_stars={10} rating={5}/>, document.getElementById('root'));
const store = storeFactory();


const render = () =>
  ReactDOM.render(
    <MyApp store={store} />,
    document.getElementById('root'),
  );

store.subscribe(render);
render();
