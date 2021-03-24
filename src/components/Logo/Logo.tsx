import React from 'react';
import logo from '../../resources/logo.png';


// import { Icon } from '@ebs-integrator/react-ebs-ui';


const Logo = () => {
  return (
    <div className="logoBox">
      <img src={logo}
        alt="logo"
        width="100"
        height="80"
      />
    </div>
  );
};
export default Logo;
