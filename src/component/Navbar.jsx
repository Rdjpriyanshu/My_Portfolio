import React from 'react'
import './Navbar.css';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src="/Portfolio/public/images/logo.png" alt="logo" className="logo"/>

        <div className="desktopMenu">
          <Link activeClass='active' to='Intro' spy={true} smooth={true} duration={500} offset={-50} className='desktop'>Home</Link>
          <Link activeClass='active' to='Skills' spy={true} smooth={true} duration={500} offset={-50} className='desktop'>About</Link>
          <Link activeClass='active' to='Myportfolio' spy={true} smooth={true} duration={500} offset={-50} className='desktop'>Works</Link>
        </div>
        <button className="btnmenu" onClick={()=>{
          document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
        }}>
          <img src="/Portfolio/public/images/contact.png" alt="contact" className="desktopimg" />
          <b>Contact Me</b>
        </button>
      </nav>
    </div>
  );
}

export default Navbar
