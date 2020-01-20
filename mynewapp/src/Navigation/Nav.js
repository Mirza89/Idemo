import React from 'react';
import './nav.css';
import RB from '../Logo/RB.png';
import 'tachyons';


const Nav = () => {
  return (
    <div>
<nav className='flex justify-between bb black-10 black'>
    <img src={RB} alt='logo' className='pointer' height="80px"/>
    <p style={{fontSize: '30px'}} className='ma4 tc'>Book your room and enjoy your stay</p>
    <div className='flex-grow pa3 flex items-center'>
    <p className='f6 link dib black dim mr3 mr4-ns pointer'>Sign In</p>
    <p className='f6 dib black bg-animate hover-bg-black no-underline pv2 ph4 br-pill ba pointer'>Sign Up</p>
  </div>
</nav>
    </div>
  );
}
export default Nav;
