import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Contact.css';
const FormSuccess = () => {
  return (
    <div className='form-content'>
      <div className='form-success'>
        <h1>I've got your information. I'll be in contact soon</h1>
        <span>
          <Link to='/'>Return to Home</Link>
        </span>
      </div>
    </div>
  );
};

export default FormSuccess;
