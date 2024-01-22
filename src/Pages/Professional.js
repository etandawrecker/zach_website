import React from 'react';
import Navbar from '../Components/Navbar';
import './Professional.css'
import { Link } from 'react-router-dom';


const Professional = () => {

    return (
        <div className='professional-page'>
            <Navbar />
            <div className='north-woods-content'>
                <h1>North Woods 2022</h1>
                <Link to="/northwoods">
                    <img src='North Woods 2022 Photos/Cleanse.png' alt="Kids playing with sun shining down" className='north-woods'/>
                </Link>
            </div>
        </div>
      );

}

export default Professional;