import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import './Reinterpretation.css'
import SingleSlideSlide from '../../Components/SingleSlide';

const Reinterpretation = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };
    
      const handlePrevious = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      };

    const slides = [
        {
            title1: 'Coming and Going',
            image1: 'Reinterpretation Photos/Coming and Going.png', // Adjust the path based on your directory structure
            alt1: 'Photo of a mural of a bee on top of a sunflower',
            description: "Artist: Willey (2019) in Smithsonian National Zoological Park"
        }, 
        {
            title1: 'Letting Go',
            image1: 'Reinterpretation Photos/Letting Go.png',
            alt1: 'A mural of children sitting on a tree branch and birds are flying over them',
            description: "Artist: Ana Cristina Dias in Lisbon, Portugal"
        }
      ];

    return (
        <div className='reinterpretation-page'>
            <Navbar />
            <div className='reinterpretation-centered-container'>
                <div className='reinterpretation-artist-statement-card'>
                    <h2>Artist Statement</h2>
                    <p>
                    This is an ongoing project, where I seek out already-made-creations and photograph them through my own lens. 
                    I reinterpret the original artwork, adding a new life to it. Is this not how the cycle of art works anyways? 
                    (All credit information to the original artist is included below each photograph)
                    </p>
                </div>
            </div>

            <SingleSlideSlide 
                title1={slides[currentSlide].title1}
                image1={slides[currentSlide].image1}
                alt1={slides[currentSlide].alt1}
                description={slides[currentSlide].description}
            />


            <div className="button-container">
                    <button onClick={handlePrevious} disabled={currentSlide === 0}>
                        <img src="/Left Arrow.svg" alt="Previous" />
                    </button>
                    <button onClick={handleNext} disabled={currentSlide === slides.length - 1}>
                        <img src="/Right Arrow.svg" alt="Next" />
                    </button>
                </div>

        </div>
      );

}

export default Reinterpretation;