import React from 'react';
import Navbar from '../src/Navbar/Navbar'
import AboutMe from './AboutUs/AboutMe';
import ContactUs from './ContactUs/ContactUs';
import Home from './Home/Home';
import PortFolio from './PortFolio/PortFolio';
import Project from './Project/Project';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <AboutMe/>
    <ContactUs/>
    <PortFolio/>
    <Project/>
    </>
  )
}

export default App