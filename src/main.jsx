import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Section from './Components/Section';
import Qualities from './Components/Qualities';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Contact from './Components/ContactForm/Form';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/section' element={<Section />} />
        <Route path='/qualities' element={<Qualities />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
