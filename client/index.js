import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import './index.css';

render(
    <App />,
  document.getElementById('root')
);
// document.getElementById('navbar-nav mr-auto').setAttribute("style", "background-color: red;")