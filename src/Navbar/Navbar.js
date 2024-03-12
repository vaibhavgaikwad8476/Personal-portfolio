import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import contact from '../Images/phone.png';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='div1'>
      <NavLink className="nav-item" to="/" 
      // activeClass='active' spy={true} smooth={true} offset={-100} duration={500}
      > Home</NavLink>

      <NavLink to="/Project" className="nav-item" 
      // activeClass='active' spy={true} smooth={true} offset={-100} duration={500}
      > Project</NavLink>

      <NavLink to="/AboutMe" className="nav-item" 
      // activeClass='active' spy={true} smooth={true} offset={-100} duration={500}
      >AboutMe</NavLink>

      </div>

      <NavLink to="/ContactUs" className="nav-item1"><button id="contact-btn"
      //  onClick={()=>{
      //   document.getElementById('contact').scrollIntoView();
      // }}
      >
      <img id='contactimg' src={contact} alt="contactimage"/>
      <span>Contact</span></button></NavLink>
    </nav>
  )

}



