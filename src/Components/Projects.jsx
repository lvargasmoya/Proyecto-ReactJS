import React from 'react';
import './Styles/Projects.css';
import Header from './Header';
import { useState, useEffect } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const Projects = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className='loader'>
          <MoonLoader color={'#dcb900'} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Header />
          <div className='projects'>
            <div className='proj-carts proj-cart-1'>
              <h3>ReactJS</h3>
            </div>
            <div className='proj-carts proj-cart-2'>
              <h3>ReactJS</h3>
            </div>
            <div className='proj-carts proj-cart-3'>
              <h3>Angular</h3>
            </div>
            <div className='proj-carts'>
              <h3>waiting...</h3>
              <p>Let's add your project here</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
