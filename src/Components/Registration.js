import React from "react";
import { Link } from 'react-router-dom';

function Registration(props) {
  return (
    <div className='registration-container'>
      <Link to='/'>Back</Link>
      <p>Registration Component</p>
    </div>
  );
}

export default Registration;
