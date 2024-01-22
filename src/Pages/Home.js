// Home.js
import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  
  return (
    <div className='page'>
      <Navbar />
      <div className="Home">
        <p className='spring-spain-title'>Spring In Spain</p>
        <Link to="/spain"><img src='Spring In Spain Photos/Awe.png' alt="Barcelona Bunkers" className='spring-title-photo'/></Link>
        <p className='north-woods-title'>North Woods 2022</p>
        <Link to="/northwoods"><img src='North Woods 2022 Photos/Cleanse.png' alt="Kids playing with sun shining down" className='north-woods-title-photo'/></Link>
      </div>
    </div>
  );
};

export default Home;
