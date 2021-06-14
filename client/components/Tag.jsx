import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions/actions.js'

const Tag = props => {
  return (
    <span className='tag'>{props.name}</span>
  )
}




export default Tag;