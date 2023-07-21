import "./FooterStyles.css";

import React from 'react';
import {FaHome,  FaGithub, FaLinkedin} from "react-icons/fa";
import {CgMail} from "react-icons/cg";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div >
                    <p>Kolhapur, Maharashtra</p>
                    </div>
                </div>
                <div className="email">
                <h4><CgMail size={20} style={{color:"#fff", marginRight:"2rem"}}/>vaishnavikaradge@gmail.com</h4>
                </div>
                
            </div>
            <div className="right">
                <h4>Get In Touch</h4>
                <p> You can reach me via email or find me on social networks.</p>
                <p>I would love to hear from you.</p>
                <div className="social">
                <FaGithub size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;