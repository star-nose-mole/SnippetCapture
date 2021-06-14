import React, { Component, useEffect, useState } from 'react';
import Tag from './Tag.jsx'



const Snippet = props => {
  const tagsArr = [];

  for (let i = 0; i < props.tags.length; i++) {
    tagsArr.push(<Tag name={props.tags[i]} />)
  }
  // <div1> {props.tags.join(', ')}</div1>

  return(
    <div id='snippet'>
     <textarea>{props.code}</textarea>
     <a href={props.URL} rel="noreferrer">
          Find the code here!
        </a>
      {tagsArr}
    </div>
  )
}

export default Snippet;