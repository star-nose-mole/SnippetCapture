import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions/actions.js'
import regeneratorRuntime from "regenerator-runtime";

const SearchReact = (props) => {
  const dispatch = useDispatch();
  let searchTags = useSelector(state => state.reducer.search);

  const [searchSentence, setSearchSentence] = useState('');

  const updatesearchHandler =  (event) => {
    // console.log(event.target.value);
    // setSearchSentence(event.target.value);
    dispatch(actions.updateSearchCreator(event.target.value));
    console.log(searchTags);

  }

  const searchEnterHandler = (event) => {
    if(event.key === 'Enter'){
      console.log('Enter was pressed, doing fetch get request');
      console.log(searchTags);
      fetch('/api/search', {
        method: 'POST',
        headers: {'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
        body: JSON.stringify({tags: searchTags}),
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
      // fetch('/api/search', {
      //   headers: {'Accept': 'application/json, text/plain, */*',
      //     'Content-Type': 'application/json'},
      //   body: JSON.stringify({tags: searchTags})
      // })

      // let data;
      // dispatch(actions.updateSnippetsCreator(data.snippets));
      // dispatch(actions.updateTagsCreator(data.tags));

      //this is for fetching init
      // fetch('/api/search', {
      //   headers: {'Accept': 'application/json, text/plain, */*',
      //     'Content-Type': 'application/json'},
      //   body: JSON.stringify({tags: []})
      // })

      //this is for adding snippet
      //need awaits
      // fetch('/api/addsnippet', {
      //   method: 'POST',
      //   headers: {'Accept': 'application/json, text/plain, */*',
      //     'Content-Type': 'application/json'},
      //   body: JSON.stringify(
      //     {
      //       snippetCode: '',
      //       url: '',
      //       tags: [],
      //     }
      //   )
      // })
      //then do
      // fetch('/api/search', {
      //   headers: {'Accept': 'application/json, text/plain, */*',
      //     'Content-Type': 'application/json'},
      //   body: JSON.stringify({tags: searchTags})
      // })
    }
    // console.log(search);
      
  }

  return (
    <div>
      <input className='searchbar' type='text' onKeyDown={searchEnterHandler} onChange={updatesearchHandler} placeholder='Search...'></input>
    </div>
  )
}

export default SearchReact;