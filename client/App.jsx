import React, { Component } from 'react';
import Login from './react-routers/Login.jsx';
import User from './react-routers/User.jsx';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

const App = () => {
  const [verified, setVerified] = React.useState(false);
  const verifiedHandler = () => {
    setVerified(true);
  }

  // React.useEffect(() => {
  //   if(true)
  // {
  //   props.verifiedHandler();
  //   history.push('/');
  // }
  // })

  // const fetchVerify = false;
  // fetch(verifiy  )
  // await fetch('/api/sdasdasdasd').then(() => console.log('before setting fetchVerify'));
  // console.log('after')
  // if(verified !== true){

  //   setVerified(true);
  // }
  React.useEffect(() => {
    // setVerified(true);
  })

  return (
    <Router>
        {verified ? <Redirect to= '/' /> : <Redirect to="/login" />}
      <Switch>
        <Route exact path="/login" component={() => <Login verifiedHandler={verifiedHandler}/>}/>
        <Route exact path="/" component={User}/>
      </Switch>

    </Router>
  )
}


{/* <Router>
      <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Login'} className="nav-link">Contact</Link></li>
            <li><Link to={'/User'} className="nav-link">About</Link></li>
          </ul>
      <Switch>
        <Route exact path='/Login' component={Login}/>
        <Route  path='/User' component={User}/>
      </Switch>
    </Router> */}

/*

      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
*/



export default App;