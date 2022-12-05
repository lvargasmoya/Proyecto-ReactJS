import React from 'react';
import './Styles/Info.css';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <div className='info-section'>
      <div className='info-about'>
        <h3>
          About <span>Luis</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea
          dolore sit expedita iure, atque facilis, eos consequatur enim
          provident commodi harum quidem. Blanditiis totam earum ab dolor. Quam,
          harum.
        </p>
        <div className='info-btn'>
          <Link to='/'>More</Link>
        </div>
      </div>
      <div className='info-content'>
        <h1>Who is Robb </h1>
        <p>Influencer & Content Creator</p>
        <p>UI & UX Designer</p>
        <p>Senior React js Programmer</p>
        <p>JavaScript Developer</p>
        <p>Web Developer In Facebook</p>
        <p>Something Creator in Something Company</p>
        <p>5 years of experience in Programming</p>
        <p>SQL Developer</p>
      </div>
    </div>
  );
};

export default Info;
