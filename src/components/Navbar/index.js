import React from 'react';

import NavbarStyles from '../styles/NavbarStyles';
import LogoIcon from '../Icons/Logo';

const Navbar = () => {
  return (
    <NavbarStyles>
      <ul>
        <li>Group Learning</li>
        <li>Projects</li>
      </ul>

      <LogoIcon height="100" width="100" />
      <button className="hamburger">Menu</button>

      <ul>
        <li>About</li>
        <li>Get Involved</li>
        <li>
          <a href="http://slack.bootcamperscollective.com/">
            Slack
          </a>
        </li>
      </ul>
    </NavbarStyles>
  )
}

export default Navbar
