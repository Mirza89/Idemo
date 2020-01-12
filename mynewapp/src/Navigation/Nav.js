import React from 'react';
import './nav.css';
import RB from '../Logo/RB.png';


const Nav = () => {
  return (
    <div>
<nav class="flex justify-between bb black-10 black">
    <a class="link black-70 hover-white no-underline flex items-center pa3" href="">
    <img src={RB} alt='logo' height="80px"/>
    </a>
    <a style={{fontSize: '30px'}} className='ma4 tc'>Room Booking</a>
    <div class="flex-grow pa3 flex items-center">
    <a class="f6 link dib black dim mr3 mr4-ns" href="#0">Sign In</a>
    <a className="f6 dib black bg-animate hover-bg-black no-underline pv2 ph4 br-pill ba" href="#0">Sign Up</a>
  </div>
</nav>
    </div>
  );
}
export default Nav;
