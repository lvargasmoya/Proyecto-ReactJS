import React from 'react';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Styles/Modal.css';

function Modal({ showModal }) {
  return (
    <div className='modal'>
      <div className='close-modal'>
        <Close className='cm' onClick={showModal} />
      </div>
      <div className='cart python-logo'>
        <Link to='/'>Python</Link>
      </div>
      <div className='cart angular-logo'>
        <Link to='/'>Angular</Link>
      </div>
      <div className='cart reactjs-logo'>
        <Link to='/'>ReactJS</Link>
      </div>
      <div className='cart frontEnd-logo'>
        <Link to='/'>Front End</Link>
      </div>
    </div>
  );
}

export default Modal;
