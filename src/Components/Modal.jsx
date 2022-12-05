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
      <div className='cart'>
        <Link to='/'>Python</Link>
      </div>
      <div className='cart'>
        <Link to='/'>Angular</Link>
      </div>
      <div className='cart'>
        <Link to='/'>ReactJS</Link>
      </div>
    </div>
  );
}

export default Modal;
