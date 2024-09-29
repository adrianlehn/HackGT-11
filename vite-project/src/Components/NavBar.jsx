import {useState} from 'react';
import { Link } from "react-router-dom"

import './Navbar.css';

function NavBar() {
  const[click,setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              REMA <i className="fa-solid fa-virus"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'}/>
            </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/tool' className='nav-links' onClick={closeMobileMenu}>
                  Tool
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default NavBar