import React, { Component, useEffect, useState } from 'react';
import Tag from './Tag.jsx'



const Snippet = props => {
  const tagsArr = [];

  for (let i = 0; i < props.tags.length; i++) {
    tagsArr.push(<Tag key={`tag${i}`} name={props.tags[i]} />)
  }
  // <div1> {props.tags.join(', ')}</div1>

  // let i = Math.floor(Math.random() * 2)
  // let link = 'https://dev.to/alisabaj/finding-the-middle-of-a-linked-list-36kp';
  // if(i === 1){
  //   link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  // }

  return(
    <div className='snippet'>
      <pre className='snippetCode'>
        <code>
          {props.code.replace(/\\n/g,'\n')}
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