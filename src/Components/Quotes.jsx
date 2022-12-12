import React, { useState } from 'react';
import quotes from './Data/Data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Styles/Quotes.css';
const Quotes = () => {
  const [index, setIndex] = useState(0);
  const { name, text } = quotes[index];
  const checkNumber = (number) => {
    if (number > quotes.length - 1) {
      return 0;
    }
    if (number < 0) {
      return quotes.length - 1;
    }
    return number;
  };
  const nextQuote = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevQuote = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <article className='review'>
      <h4 className='author'>{name}</h4>
      <p className='text'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevQuote}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextQuote}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Quotes;
