import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions/actions.js'

const User = props => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  const codeHandler = (event) => {
    // setCode(event.target.value);
    let sendingFile = JSON.stringify(event.target.value);
    console.log('sendingFile: ', sendingFile);
    let outFORMAT = JSON.parse(sendingFile);
    console.log('outFORMAT: ', outFORMAT);
    setCode(outFORMAT);
  }
  useEffect(() => {
    fetch('/', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        const [user, tags, snippets] = data;
        dispatch(actions.initUserCreator(user, tags, snippets))
      })
  })


  return(
    <div>
      You made it!
      <pre>
      <code>
        {code}
      </code>
      </pre>
      <textarea onChange={codeHandler} cols='50' rows='10'></textarea>
    </div>
  )


};






export default User;