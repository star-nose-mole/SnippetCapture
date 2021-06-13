import React, { Component } from 'react';
import InsideUser from '../containers/InsideUser.jsx';


const User = props => {
  const [code, setCode] = React.useState('');

  const codeHandler = (event) => {
    // setCode(event.target.value);
    let sendingFile = JSON.stringify(event.target.value);
    console.log('sendingFile: ', sendingFile);
    let outFORMAT = JSON.parse(sendingFile);
    console.log('outFORMAT: ', outFORMAT);
    setCode(outFORMAT);
  }
  return(
    <div>
      You made it!
      <pre>
      <code>
        {code}
      </code>
      </pre>
      <textarea onChange={codeHandler} cols='50' rows='10'></textarea>
    </div>
  )


};






export default User;