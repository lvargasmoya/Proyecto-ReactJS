import { Link } from '@mui/material';
import React, { useState } from 'react';
import Modal from './Modal';
import './Styles/Section.css';

export default function () {
  const [modalActive, setModalActive] = useState(false);

  const showModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className='section'>
      <div>
        <h1 className='main-header'>
          My name is<span>Luis</span>
          <p className='main-status'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            ducimus veritatis quod officiis tenetur nisi hic explicabo, corrupti
            fuga, omnis non voluptas! Asperiores molestias ab odit neque veniam
            quam minima!
          </p>
        </h1>

        <div className='main-btn'>
          <Link onClick={showModal} to='/'>
            see work
          </Link>
        </div>
        {modalActive && <Modal showModal={showModal} />}
      </div>
    </div>
  );
}
