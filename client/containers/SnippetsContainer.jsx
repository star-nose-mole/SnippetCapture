//contains snippet component
import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions/actions.js'
import Snippet from '../components/Snippet.jsx'



const SnippetsContainer = props => {

  return(
    <div>
      <Snippet/>
    </div>
  )
}

export default SnippetsContainer;