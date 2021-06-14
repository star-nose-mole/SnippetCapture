import React, { Component, useEffect, useState } from 'react';
import Tag from './Tag.jsx'



const Snippet = props => {
  const tagsArr = [];

  for (let i = 0; i < props.tags.length; i++) {
    tagsArr.push(<Tag key={`tag${i}`} name={props.tags[i]} />)
  }
  // <div1> {props.tags.join(', ')}</div1>

  return(
    <div id='snippet'>
      <pre>
        <code>
          {props.code}
        </code>
      </pre>
     <a href={props.URL} rel="noreferrer" target="_blank">
          Find the code here!
        </a>
      <div>
        {tagsArr}
      </div>
    </div>
  )
}

export default Snippet;