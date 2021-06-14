import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import regeneratorRuntime from "regenerator-runtime";

const Login = (props) => {
  //verify user from database


  let history = useHistory();
  const username = useSelector(state => state.reducer.username);
  // const [username, setUsername] = 
  const dummydatabase = {username: 'matt', password: 'frank'};

  const registerHandler = (event) => {
    event.preventDefault();
    // console.log('username: ', event.target);
    const username = document.getElementById('userName');
    const password = document.getElementById('userPassword');
    console.log('username', username.value)
    console.log('password', password.value) 
    
    // fetch('/login', 'POST')
    // body.username = ()
    return;
  }

  const loginHandler = async (event) => {
    event.preventDefault();
    // console.log('username: ', event.target);
    const username = document.getElementById('userName');
    const password = document.getElementById('userPassword');
    console.log('username', username.value)
    console.log('password', password.value) 
    let loginSuccess = false;
    fetch('/api/login', {
      method: 'POST',
      headers: {'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
      body: JSON.stringify({'username': username.value, 'password': password.value}),
    })
      .then(response => response.json())
      .then(data => {
        if(data){
          props.verifiedHandler();
          history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      })

    // await fetch('/login')
    //   .then(response => response.json())
    //   .then(data => {
    //     loginSuccess = true;
    //   })
    //   .catch(err =>{
    //     loginSuccess = true;
    //   })
    // console.log('after fetch')
    // console.log(loginSuccess);
    //if pass (success)
    // body.username = ()
    return;
  }


  return (
      <div className="login-wrapper">
        <div id='formHeader'><h1>  SNIPPET++</h1></div>  
        <div>
          <form action="login" method="post" id="loginForm">
            <div>
          <label htmlFor="userName">USERNAME</label>
          <input type="text" id="userName" name="userName" required/>
        </div>
        <div>
          <label htmlFor="userPassword">PASSWORD</label>
          <input type="password" id="userPassword" name="userPassword" required/>
        </div>
        <div id="form-Buttons">
          <button type="submit" onClick={registerHandler}>Register</button>
          <button type="submit" onClick={loginHandler}>Login</button>
        </div>
      </form>
      </div>
      </div>
    // <div>
    //   <h1> Login Test {username}</h1> 
    //   <button onClick={() =>  {history.push('/user')}}>User</button>
    // </div>
  )
}

export default Login;
{/* <div className="login-wrapper">
<h1>SNIPPIT++</h1>
<form action="login" method="post" id="loginForm">
  <div>
    <label htmlFor="userName">USERNAME</label>
    <input type="text" id="userName" name="userName" required/>
  </div>
  <div>
    <label htmlFor="userPassword">PASSWORD</label>
    <input type="password" id="userPassword" name="userPassword" required/>
  </div>
  <div id="form-Buttons">
    <button type="submit">Register</button>
    <button type="submit">Login</button>
  </div>
</form>
</div> */}

