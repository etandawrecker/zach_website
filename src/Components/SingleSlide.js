//SingleSlide.js
import React from 'react';
import './SingleSlide.css'; // Import the CSS file for ContactCard styling

const SingleSlide = (props) => {
  return (
    <div className="single-slide">
      <div className="single-slide-image">
        <p className='titles'>{props.title1}</p>
        <img src={props.image1} alt={props.alt1}/>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  );
};

export default SingleSlide;
