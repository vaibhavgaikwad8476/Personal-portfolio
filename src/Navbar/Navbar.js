import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import contact from '../Images/phone.png';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='div1'>
      <NavLink className="nav-item" to="/"> Home</NavLink>
      <NavLink to="/Project" className="nav-item">Project</NavLink>
      <NavLink to="/AboutMe" className="nav-item">AboutMe</NavLink>
      <NavLink to="/ContactUs" className="nav-item">Contact</NavLink>
    </div>
    </nav>
  )

}



