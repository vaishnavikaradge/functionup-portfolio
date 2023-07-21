import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Skills from '../components/Skills';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="ABOUT" text="I'm a Front-End developer."/>
      <AboutContent/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default About;