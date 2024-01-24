import React from 'react';
import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import './Spain.css'
import Slide from '../../Components/Slide';


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
            description1: 'An emerging adult was given the keys to a foreign land,',
            title2: 'Foreign Captive',
            image2: 'Spring In Spain Photos/Foreign Captive.jpg', // Adjust the path based on your directory structure
            alt2: 'A photo of the Bridge of Sighs in Venice, Italy',
            description2: 'yet he was consumed by the thought of feeling different and unwelcome with no place to go.',
            state: 0
        },
        {
            title1: 'Shouldering the Past',
            image1: 'Spring In Spain Photos/Shouldering the Past.jpg', // Adjust the path based on your directory structure
            alt1: 'Photo of a statue carrying the foundations of a building',
            description1: 'He tried to keep moving forward while stuck in the past,',
            title2: 'Letting Go',
            image2: 'Spring In Spain Photos/Letting Go.png', // Adjust the path based on your directory structure
            alt2: 'A photo of a mural in Lisbon, Portugal',
            description2: 'but he found that the ability to detach indefinitely is oftentimes harshly all or nothing.',
            state: 1
        },
        {
            title1: 'The Absurdity of Time',
            image1: 'Spring In Spain Photos/The Absurdity of Time.png', // Adjust the path based on your directory structure
            alt1: 'Photo of a statue carrying the foundations of a building',
            description1: 'He was lost in time, feeling the sand fall down the hourglass.',
            title2: 'Movement in Distraction',
            image2: 'Spring In Spain Photos/Movement in Distraction.png', // Adjust the path based on your directory structure
            alt2: 'A photo in the room of mirrors in Monk Bar in Barcelona, Spain',
            description2: 'Will it get the best of him or can he pass through?',
            state: 2
        },
        {
            title1: 'The Power of Silence',
            image1: 'Spring In Spain Photos/The Power of Silence.jpg', // Adjust the path based on your directory structure
            alt1: 'Still photo of a home in Lake Como',
            description1: "He wondered: what happens when there's no one to talk to but himself?",
            title2: 'Lone Sailor',
            image2: 'Spring In Spain Photos/Lone Sailor.png', // Adjust the path based on your directory structure
            alt2: 'A photo of a lone sailboat on the Barcelona coast',
            description2: "Personal conviction would fill the space when no one's watching.",
            state: 3
        },
        {
            title1: 'Learning to Fail',
            image1: 'Spring In Spain Photos/Learning to Fail.png', // Adjust the path based on your directory structure
            alt1: 'Still photo of an art installation in Palma de Mallorca, Spain',
            description1: "He found a more realistic narrative of what it means to grow. First, one must learn how to fail.",
            title2: 'Ethereal Awakening',
            image2: 'Spring In Spain Photos/Ethereal Awakening.png', // Adjust the path based on your directory structure
            alt2: 'A distorted photo of a church in Barcelona',
            description2: 'A sense of purpose arose from within.',
            state: 4
        }
      ];

    return (
        <div className='spain-page' data-current-slide={currentSlide}>
            <Navbar />
            {currentSlide === 0 && (
                <div className='spain-centered-container'>
                    <div className='spain-artist-statement-card'>
                        <h2>Artist Statement</h2>
                        <p>
                        Photos taken from my study abroad experience in Barcelona, Spain and<br/> 
                        Europe during the spring semester of 2023. 
                        </p>
                    </div>
                </div>)}
            <div className='spain-image-container'>


                <Slide
                    title1={slides[currentSlide].title1}
                    image1={slides[currentSlide].image1}
                    alt1={slides[currentSlide].alt1}
                    description1={slides[currentSlide].description1}
                    title2={slides[currentSlide].title2}
                    image2={slides[currentSlide].image2}
                    alt2={slides[currentSlide].alt2}
                    description2={slides[currentSlide].description2}
                    key={currentSlide}
                />

                <div className="button-container">
                    <button onClick={handlePrevious} disabled={currentSlide === 0}>Previous</button>
                    <button onClick={handleNext} disabled={currentSlide === slides.length - 1}>Next</button>
                </div>

                {/*
                <p>Awe</p>
                <img src="Spring In Spain Photos/Awe.png" alt="" className='spain-images'/>
                <p>Ethereal Awakening</p>
                <img src="Spring In Spain Photos/Ethereal Awakening.png" alt="" className='spain-images'/>
                <p>Foreign Captive</p>
                <img src="Spring In Spain Photos/Foreign Captive.jpg" alt="" className='spain-images'/>
                <p>Learning to Fail</p>
                <img src="Spring In Spain Photos/Learning to Fail.png" alt="" className='spain-images'/>
                <p>Letting Go</p>
                <img src="Spring In Spain Photos/Letting Go.png" alt="" className='spain-images'/>
                <p>Lone Sailor</p>
                <img src="Spring In Spain Photos/Lone Sailor.png" alt="" className='spain-images'/>
                <p>Movement in Distraction</p>
                <img src="Spring In Spain Photos/Movement in Distraction.png" alt="" className='spain-images'/>
                <p>Shouldering the Past</p>
                <img src="Spring In Spain Photos/Shouldering the Past.jpg" alt="" className='spain-images'/>
                <p>The Absuridty of Time</p>
                <img src="Spring In Spain Photos/The Absurdity of Time Edit 1.png" alt="" className='spain-images'/>
                <p>The Power of Silence</p>
                <img src="Spring in Spain Photos/The Power of Silence.png" alt="" className='spain-images'/>
                */}
            </div>
        </div>
      );

}

export default Spain;