//contains snippetCreaterContainer
import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions/actions.js'

const AddSnippetContainer = (props) => {
  console.log(props)
  //useState will initially be empty snippet and will then set the new state and cause a re-render of the function
  
  // const [ state, newState ] = useState({
  //   snippetTags: [],
  //   url_Link: '',
  //   snippet: ''
  // })
  const [ snippetTags, newSnippetTags ] = useState({
    snippetTags: []
  })
  const [ url_Link, newUrl_Link ] = useState({
    url_Link: ''
  })
  const [ snippet, newSnippet ] = useState({
    snippet: ''
  })



  //after submit button, update initial state with pair values in form
  // setCode(event.target.value);
  //setstate props.snippet = 
  //const [snippet, setSnippet] = useState(‘’)
   const newSnippetHandler = (event) => {
   
    let input_snippetTags = document.getElementById('snippetTags');
    let input_snippet = document.getElementById('snippet');
    let input_url_Link = document.getElementById('url_Link');

     fetch('/api/addsnippet', {
        method: 'POST',
        headers: {'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'},
        body: JSON.stringify(
          { 
            tags: input_snippetTags.value.split(' '),
            url: input_url_Link.value,
            snippetCode: input_snippet.value,
          }
        )
      })

  
      // fetch('/api/search', {
      //   headers: {'Accept': 'application/json, text/plain, */*',
      //     'Content-Type': 'application/json'},
      //   body: JSON.stringify({tags: searchTags})
      // })

      //reset form data
      input_snippetTags.value= ''
      input_snippet.value= ''
      input_url_Link.value= ''
  };


  //make sure form resets
  return (
    <div>
      <form action="" id="newSnippetForm">
      <div>
          <label htmlFor="snippetTags">ADD SNIPPET TAGS</label>
          <input type="text" id="snippetTags" name="snippetTags" required/>
        </div>
        <div>
          <label htmlFor="url_Link">ADD URL</label>
          <input type="text" id="url_Link" name="url_Link" required/>
        </div>
        <div>
          <label htmlFor="snippet">ADD SNIPPET</label>
          <input type="textarea" id="snippet" name="snippet" required/>
        </div>
        <div>
          <button type="button" value="Submit" onClick={newSnippetHandler}>Add New Snippet</button>
        </div>
      </form>
    </div>
  )
}

export default AddSnippetContainer;