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
        <p>Zach Angerthal (b. 2002) is a photographer currently based in Wisconsin. He currently <br/> 
          studies Psychology B.A. and Spanish B.A. at the University of Wisconsin-Madison, with the <br/>
          intention of graduating in May of 2024.</p>

        <p>Home is a word unfamiliar to Angerthal, as he was raised as a military brat.<br/>
          His passion for photography began when living in Quito, Ecuador as a young boy. In awe of the beautiful<br/>
          landscapes and fascinating culture, he felt compelled to get his first camera. Ever since, he has<br/>
          enjoyed the act of capturing his everyday moments wherever he goes. </p>

        <p>Angerthal is primarily interested in the realms of fine art photography, commercial<br/> 
          photography, and documentary photography. He worked as the photographer at his summer camp<br/>  
          — North Woods Camp of YMCA of Greater Boston — during the summer of 2022.<br/>  
          He is currently enrolled in <i>Life Sciences Communication 450: Documentary Photography for<br/>  
          the Sciences</i> at UW-Madison, a course that educates students in the art of visual storytelling<br/>  
          and fosters a photographic mindset for effectively communicating topics related to science,<br/>  
          health, and the environment. In this course, he examines the impact of social documentary<br/>  
          photography, with assignments focused on developing a portfolio of documentary photography.</p>
      </div>
    </div>
  );
};

export default About; 