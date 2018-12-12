import React from 'react'
import Logo from '../../assets/bc-logo-NEW.png';

const LogoIcon = ({height}) => {
  return (
    <div>
      <img height={height} src={Logo} alt="logo"/>
    </div>
  )
};

export default LogoIcon;

