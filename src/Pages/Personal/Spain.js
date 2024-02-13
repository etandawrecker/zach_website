import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import './Spain.css'
import SpainSlide from '../../Components/SpainSlide';


const Spain = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };
    
      const handlePrevious = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      };


    const slides = [
        {
            title1: 'Awe',
            image1: 'Spring In Spain Photos/Awe.png', // Adjust the path based on your directory structure
            alt1: 'Barcelona Bunkers',
            description: 'An emerging adult was given the keys to a foreign land,'
        },
        {
            title1: 'Foreign Captive',
            image1: 'Spring In Spain Photos/Foreign Captive.jpg', // Adjust the path based on your directory structure
            alt1: 'A photo of the Bridge of Sighs in Venice, Italy',
            description: 'yet he was consumed by the thought of feeling different and unwelcome with no place to go.'
        },
        {
            title1: 'Shouldering the Past',
            image1: 'Spring In Spain Photos/Shouldering the Past.jpg', // Adjust the path based on your directory structure
            alt1: 'Photo of a statue carrying the foundations of a building',
            description: 'He tried to keep moving forward while stuck in the past,'
        }, 
        {
            title1: 'Letting Go',
            image1: 'Spring In Spain Photos/Letting Go.png', // Adjust the path based on your directory structure
            alt1: 'A photo of a mural in Lisbon, Portugal',
            description: 'but he found that the ability to detach indefinitely is oftentimes harshly all or nothing.'
        },
        {
            title1: 'The Absurdity of Time',
            image1: 'Spring In Spain Photos/The Absurdity of Time.png', // Adjust the path based on your directory structure
            alt1: 'Photo of a statue carrying the foundations of a building',
            description: 'He was lost in time, feeling the sand fall down the hourglass.'
        }, {
            title1: 'Movement in Distraction',
            image1: 'Spring In Spain Photos/Movement in Distraction.png', // Adjust the path based on your directory structure
            alt1: 'A photo in the room of mirrors in Monk Bar in Barcelona, Spain',
            description: 'Will it get the best of him or can he pass through?'
        },
        {
            title1: 'The Power of Silence',
            image1: 'Spring In Spain Photos/The Power of Silence.jpg', // Adjust the path based on your directory structure
            alt1: 'Still photo of a home in Lake Como',
            description: "He wondered: what happens when there's no one to talk to but himself?"
        },
        {
            title1: 'Lone Sailor',
            image1: 'Spring In Spain Photos/Lone Sailor.png', // Adjust the path based on your directory structure
            alt1: 'A photo of a lone sailboat on the Barcelona coast',
            description: "Personal conviction would fill the space when no one's watching."
        },
        {
            title1: 'Learning to Fail',
            image1: 'Spring In Spain Photos/Learning to Fail.png', // Adjust the path based on your directory structure
            alt1: 'Still photo of an art installation in Palma de Mallorca, Spain',
            description: "He found a more realistic narrative of what it means to grow. First, one must learn how to fail."
        }, 
        {
            title1: 'Ethereal Awakening',
            image1: 'Spring In Spain Photos/Ethereal Awakening.png', // Adjust the path based on your directory structure
            alt1: 'A distorted photo of a church in Barcelona',
            description: 'A sense of purpose arose from within.'
        }
      ];

    return (
        <div className='spain-page'>
            <Navbar />
            <div className='spain-centered-container'>
                <div className='spain-artist-statement-card'>
                    <h2>Artist Statement</h2>
                    <p>
                        Photos taken from my study abroad experience in Barcelona, Spain and<br/> 
                        Europe during the spring semester of 2023. 
                    </p>
                    </div>
                </div>
            <div className='spain-image-container'>


                <SpainSlide
                    title1={slides[currentSlide].title1}
                    image1={slides[currentSlide].image1}
                    alt1={slides[currentSlide].alt1}
                    description={slides[currentSlide].description}
                    key={currentSlide}
                />

                <div className="button-container">
                    <button onClick={handlePrevious} disabled={currentSlide === 0}>Previous</button>
                    <button onClick={handleNext} disabled={currentSlide === slides.length - 1}>Next</button>
                </div>

            </div>
        </div>
      );

}

export default Spain;