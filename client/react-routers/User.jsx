import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from 'react-router-dom';
import * as actions from '../actions/actions.js'
import AddSnippetContainer from '../containers/AddSnippetContainer.jsx';
import DisplayContainer from '../containers/DisplayContainer.jsx';

const User = props => {
  let history = useHistory();
  // useEffect(() => {
  //   if(true){
  //     history.push('/login');
  //     console.log('push');
  //   }
  // })
  <Redirect to="/login"/>
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

    fetch('/api/search', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // const resultTag = data.snippets.map((snippet) => );
        const resultSnippets = [];
        data.snippets.forEach((snippet) => {
          // console.log(JSON.parse(snippet.code));
          const tempSnippet = {
            ...snippet,
            snippet_id: "for(let i = 0){\n  i++;\n}",
          }
          resultSnippets.push(tempSnippet);
        })
        console.log('resultSnippet', resultSnippets);
        dispatch(actions.initUserCreator('Sam', data.tags, resultSnippets))
      })
  })


  return(
    <div>You made it!
      <div className='userContainer'>
        <AddSnippetContainer/>
        <DisplayContainer/>
      </div>
    </div>
  )
  
  
};




{/* <pre>
<code>
  {code}
</code>
</pre>
<textarea onChange={codeHandler} cols='50' rows='10'></textarea> */}


export default User;