import "./HeroStyles.css";

import React from 'react';
import {Link} from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src="https://dbifirm.com/wp-content/uploads/2015/10/4-Free-Websites-to-Get-Your-Architecture-Portfolio-Online.png" alt="Intro-Img" />
        </div>
        <div className="content">
          <p>Hi, I'm Vaishnavi.</p>
          <h1>Frontend Developer</h1>
          <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contactus" className="btn btn-light">CONTACT</Link>
          </div>
        </div>
    </div>
    
  )
}

export default Hero;