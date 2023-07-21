import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Form  from '../components/Form';

const ContactUs = () => {
  return (
    <div>
       <Navbar/>
       <Hero2 heading="CONTACT" text="connect with me through social accounts"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default ContactUs;