//Contact.js

import React from 'react';
import Navbar from '../Components/Navbar';
import ContactCard from '../Components/ContactCard';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contact-container'>
        <div className="Contact">
          <ContactCard />
        </div>
        </div>
    </div>
  );
};

export default Contact; // or Contact
