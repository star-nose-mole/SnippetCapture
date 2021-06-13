import React, { Component } from 'react';


const User = props => {
  const [code, setCode] = React.useState('');

  const codeHandler = (event) => {
    setCode(event.target.value);
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