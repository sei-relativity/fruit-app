import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const fruits = [
  'Mango', 'Banana', 'Orange',
  'Apple', 'Pineapple', 'Dates'
];

ReactDOM.render(<App fruits={fruits} />, document.getElementById('root'));