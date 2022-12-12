import { Link } from '@mui/material';
import React, { useState } from 'react';
import Modal from './Modal';
import Header from './Header';
import Quotes from './Quotes';
import './Styles/Section.css';

export default function () {
  const [modalActive, setModalActive] = useState(false);

  const showModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <>
      <Header />
      <div className='section'>
        <div>
          <h1 className='main-header'>
            I'm<span>Luis</span>
            <p className='main-status'>
              I'm a passionate, detailed, focused and centred human being
              intending to become one of the best website designers and
              developers. The journey is hard and long, with variables and
              challenges in building a website that meets the most delicate and
              sophisticated requirements. I'm a professional embraced by the
              darkest colour to create the shiniest results. A self-learner on
              the one hand and a student on another, to embrace the newest
              technologies that help construct the best project a client
              deserves.
            </p>
          </h1>
        </div>
      </div>
    </>
  );
}
