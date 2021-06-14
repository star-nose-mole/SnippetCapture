// contains search component and snippets container
import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions/actions.js'
import SearchReact from '../components/Search.jsx'
import SnippetsContainer from './SnippetsContainer.jsx';

const DisplayContainer = (props) => {
  return(
    <div className='displayContainer'>  
      <SearchReact/>
      <SnippetsContainer/>
    </div>
  
  )
}

export default DisplayContainer;


