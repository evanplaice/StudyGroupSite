import React from 'react';

import NavbarStyles from '../styles/NavbarStyles';
import LogoIcon from '../Icons/Logo';

const Navbar = () => {
  return (
    <NavbarStyles>
      <ul>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <h1>
        <LogoIcon  className="logo" height="80"/>
      </h1>
      <ul>
        <li>Resources</li>
        <li>Group Learning</li>
      </ul>
      <button className="hamburger">Menu</button>
    </NavbarStyles>
  )
}

export default Navbar
