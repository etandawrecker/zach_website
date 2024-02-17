import React from 'react';
import Navbar from '../Components/Navbar';
import './Personal.css'
import { Link } from 'react-router-dom';


const Personal = () => {

    return (
        <div className='personal-page'>
            <Navbar />
            <div className='spain-content'>
                <h1>Spring in Spain</h1>
            <Link to="/spain">
                <img src='Spring In Spain Photos/Awe.png' alt="Barcelona Bunkers" className='awe'/>
            </Link>
            </div>
            <div className='rockies-content'>
                <h1>The Rockies</h1>
            <Link to='/rockies'>  
                <img src="The Rockies Final Photos/The Impossible.png" alt="Photo between trees looking to the mountains" className='impossible'/>
            </Link>  
            </div>
        </div>
      );

}

export default Personal;