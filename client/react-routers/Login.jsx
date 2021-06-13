import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  return (
    <div>
      <h1> Login Test </h1> 
      <button onClick={() =>  {history.push('/user')}}>User</button>
    </div>
  )
}

export default Login;