import React, { useState } from 'react';
import { Close, MenuOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Styles/Header.css';

export default function Header() {
  const [navActive, setNavActive] = useState(false);
  const openMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <div className='header'>
      <div className='logo'></div>
      <nav>
        <ul className={navActive ? 'list-items active' : 'list-items'}>
          <div className='close-icon'>
            <Close className='close' onClick={openMenu} />
          </div>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/qualities'>Qualities</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contacs</Link>
          </li>
        </ul>
      </nav>

      <div className='hamburger-icon'>
        <MenuOutlined className='icon' onClick={openMenu} />
      </div>
    </div>
  );
}
