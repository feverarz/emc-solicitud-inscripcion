import React from 'react';
//import logo from '../logoEMC.jpg'; 
//import logo from '../logoapaisado.jpg'; 
import logo from '../logo3.jpg'; 

function Logo({width,nocentrar}) {
  // Import result is the URL of your image
  return <img style={{marginTop:'1rem'}} className={nocentrar ? '' : 'centrado'} src={logo} alt="Logo" width={width ? width : '150'}/>;
}

export default Logo;