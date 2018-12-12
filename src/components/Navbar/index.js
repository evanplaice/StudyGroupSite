import React from 'react';
import NavbarStyles from '../styles/NavbarStyles';


const Navbar = () => {
  return (
    <NavbarStyles>
      <ul>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <h1>BADR</h1>
      <ul>
        <li>Resources</li>
        <li>Group Learning</li>
      </ul>
      <div className="hamburger">Menu</div>
    </NavbarStyles>
  )
}

export default Navbar
