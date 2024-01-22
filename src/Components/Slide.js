//Slide.js
import React from 'react';
import './Slide.css'; // Import the CSS file for ContactCard styling

const Slide = (props) => {
  return (
    <div className="slide">
      <div className="image-container">
        <p className='titles'>{props.title1}</p>
        <img src={props.image1} alt={props.alt1}/>
        <p>{props.description1}</p>
      </div>
      <div className="image-container">
         <p className='titles'>{props.title2}</p>
        <img src={props.image2} alt={props.alt2}/>
        <p>{props.description2}</p>
      </div>
    </div>
  );
};

export default Slide;
