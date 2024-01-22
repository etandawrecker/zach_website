// ContactCard.js
import React from 'react';
import './ContactCard.css'; // Import the CSS file for ContactCard styling

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="header">
        <h2 className="name">Zach Angerthal</h2>
        <p className="position">Photographer</p>
      </div>
      <div className="details">
        <p className="email">zach.angerthal@gmail.com</p>
        <p className="phone">571-421-7597</p>
      </div>
    </div>
  );
};

export default ContactCard;