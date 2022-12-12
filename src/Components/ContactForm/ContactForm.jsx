import React from 'react';
import '../Styles/Contact.css';
import Header from '../Header.jsx';
import useForm from './Hook/useForm';
import validate from './validateInfo';
import { useState, useEffect } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const Contact = ({ submitForm }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      {loading ? (
        <div className='loader'>
          <MoonLoader color={'#dcb900'} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Header />
          <div className='contact'>
            <h1>Contact me</h1>
            <form className='form-style' onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p className='error-message'>{errors.name}</p>}
              <input
                type='text'
                placeholder='Surname'
                name='surname'
                value={values.surname}
                onChange={handleChange}
              />
              {errors.surname && (
                <p className='error-message'>{errors.surname}</p>
              )}
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className='error-message'>{errors.email}</p>}
              <input
                type='text'
                placeholder='Message'
                name='message'
                className='input-msg'
                value={values.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className='error-message'>{errors.message}</p>
              )}
              <button type='submit'>send</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
