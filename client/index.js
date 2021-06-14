import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from "react-router-dom"
import App from './App';
import './index.css';
import store from './store'


render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);
// document.getElementById('navbar-nav mr-auto').setAttribute("style", "background-color: red;")