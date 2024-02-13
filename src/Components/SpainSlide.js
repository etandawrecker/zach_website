//SpainSlide.js
import React from 'react';
import './SpainSlide.css'; // Import the CSS file for ContactCard styling

const SpainSlide = (props) => {
  return (
    <div className="spain-slide">
      <div className="spain-slide-image">
        <p className='spain-titles'>{props.title1}</p>
        <img src={props.image1} alt={props.alt1}/>
        <p className='spain-description'>{props.description}</p>
      </div>
    </div>
  );
};

export default SpainSlide;
