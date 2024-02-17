import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import './Rockies.css'
import SingleSlideSlide from '../../Components/SingleSlide';

const Rockies = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };
    
      const handlePrevious = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      };

    const slides = [
        {
            title1: 'Away for Miles',
            image1: 'The Rockies Final Photos/Away for Miles.jpg', // Adjust the path based on your directory structure
            alt1: 'Photo of a lonely house',
        }, 
        {
            title1: 'Burning Maze',
            image1: 'The Rockies Final Photos/Burning Maze.jpg',
            alt1: 'Photo of the forest from the outside'
        }, 
        {
            title1: 'Crowmen',
            image1: 'The Rockies Final Photos/Crowmen.jpg',
            alt1: 'Photo of a lonely crow perched a tree'
        }, 
        {
            title1: 'Midsummer',
            image1: 'The Rockies Final Photos/Midsummer.jpg',
            alt1: 'Photo taken out a window into the forest'
        }, 
        {
            title1: 'Nature_s Wrath',
            image1: 'The Rockies Final Photos/Nature_s Wrath.jpg',
            alt1: 'Dinosaur bones'
        }, 
        {
            title1: 'Only the Brave',
            image1: 'The Rockies Final Photos/Only the Brave.jpg',
            alt1: 'A trail leading into the forest'
        }, 
        {
            title1: 'The Impossible',
            image1: 'The Rockies Final Photos/The Impossible.png',
            alt1: 'Photo into the mountains'
        },
        {
            title1: 'White Lava',
            image1: 'The Rockies Final Photos/White Lava.jpg',
            alt1: 'Snow on the mountains'
        },
        {
            title1: 'Winter Wonderland',
            image1: 'The Rockies Final Photos/Winter Wonderland.jpg',
            alt1: 'Fog over the snowy capped mountains'
        }
      ];

    return (
        <div className='rockies-page'>
            <Navbar />
            <div className='centered-container'>
                <div className='rockies-artist-statement-card'>
                    <h2>Artist Statement</h2>
                    <p>
                    Four guys who should not have been allowed into the woods together.
                    </p>
                </div>
            </div>

            <SingleSlideSlide 
                title1={slides[currentSlide].title1}
                image1={slides[currentSlide].image1}
                alt1={slides[currentSlide].alt1}
            />


            <div className="button-container">
                    <button onClick={handlePrevious} disabled={currentSlide === 0}>Previous</button>
                    <button onClick={handleNext} disabled={currentSlide === slides.length - 1}>Next</button>
                </div>

        </div>
      );

}

export default Rockies;