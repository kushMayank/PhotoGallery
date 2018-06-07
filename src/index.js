import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { Provider }  from 'react-redux'
import configureStore from './js/store/store'

const stores=configureStore();
console.log("bhjdgsjdshsgdhshdshd",stores);

ReactDOM.render(<Provider  store={stores}><App/></Provider>, document.getElementById('root'));