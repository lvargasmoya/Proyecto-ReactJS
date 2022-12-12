import React from 'react';
import { useState, useEffect } from 'react';
import './Styles/Qualities.css';
import Header from './Header';
import MoonLoader from 'react-spinners/MoonLoader';

const Info = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
          <div className='info-section'>
            <div className='info-about'>
              <h3>
                About my <span className='title-qualit'>Qualities</span>
              </h3>
              <p>
                Some of my most valuable qualities are{' '}
                <em>
                  the patience to deal with challenges, death lines, coding or
                  designing problems.
                </em>{' '}
                Also,{' '}
                <em>
                  the love for learning new techniques, new tendencies, new
                  scripts and designs
                </em>
                , and{' '}
                <em>
                  the curiosity to acquire further acknowledgement is a vivid
                  flame inside me
                </em>
                , waiting to consume new information. I can also mention
                perfectionism and detail oriented when working on any project,
                which assures my compromise and my best effort with something I
                enjoy doing.
              </p>
            </div>
            <div className='info-content'>
              <h1>Who is Luis? </h1>
              <p>Junior full stack developer</p>
              <p>React JS Junior developer</p>
              <p>Angular Junior developer</p>
              <p>JavaScript Junior developer</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Info;
