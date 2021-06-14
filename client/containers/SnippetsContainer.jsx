//contains snippet component
import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions/actions.js'
import Snippet from '../components/Snippet.jsx'


const SnippetsContainer = props => {
  const snippets = useSelector(state => state.snippets);
  
  const snippetsArr = [];

  for (let i = 0; i < snippets.length; i++) {
    snippetsArr.push(
    <Snippet 
    key={snippets[i].snippet_id}
    code={snippets[i].code}
    URL={snippets[i].url}
    tags={snippets[i].tags}
    />)
  }

  return(
    <div id='snippetContainer'>
      {snippetsArr}
    </div>
  )
}

export default SnippetsContainer;