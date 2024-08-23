// About.js 
import React from 'react';
import Navbar from '../Components/Navbar';
import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <img src="/Zach About Photo.png" alt="The photographer portrait" className='about-title'/>
      <div className="About">
        <p>Zach Angerthal (b. 2002) is a photographer currently based in Washington, D.C. 
          He studied Psychology and Spanish at the University of Wisconsin-Madison, graduating in May of 2024. 
          At UW-Madison, he took a course on visual storytelling and how to think photographically for communicating the 
          environment, science, and health. This course reinvigorated his passion for photography and inspired him to create on a 
          personal and professional level.</p>

        <p>Home is a word unfamiliar to Angerthal, as he was raised as a military brat.<br/>
          His passion for photography began when living in Quito, Ecuador as a young boy. In awe of the beautiful<br/>
          landscapes and fascinating culture, he felt compelled to get his first camera. Ever since, he has<br/>
          enjoyed the act of capturing his everyday moments wherever he goes. </p>

        <p>Angerthal is primarily interested in the realms of fine art photography and commercial photography, 
          including but not limited to, events, establishments (restaurants, stores, etc.), and product(s). 
          He worked as the photographer at his summer camp<br/>  
          — North Woods Camp of YMCA of Greater Boston — during the summer of 2022.<br/>  
          His projects to date include <i>North Woods 2022</i>, <i>Spring in Spain</i> (2023), and <i>The Rockies</i> (2024).</p>
      </div>
    </div>
  );
};

export default About; 
