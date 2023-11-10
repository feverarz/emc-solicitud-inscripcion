import React from 'react';
import logo from '../logo3.jpg'; 

function Logo({width,nocentrar}) {
  return <img style={{marginTop:'1rem'}} className={nocentrar ? '' : 'centrado'} src={logo} alt="Logo" width={width ? width : '150'}/>;
}

export default Logo;