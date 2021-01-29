import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import Dropdown from './Dropdown';
import Button from './Button';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <>
      <nav className="navbar">
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        Sweat <GiIcons.GiFlowerTwirl className='logo-icon' /> 
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/price' className='nav-links' onClick={closeMobileMenu}>
              Price
            </Link>
          </li>
          <li className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link 
            to='/locations' 
            className='nav-links' 
            onClick={closeMobileMenu}>
              Locations <FaIcons.FaAngleDown className='arrow-down'/>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item nav-item-mobile">
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar
