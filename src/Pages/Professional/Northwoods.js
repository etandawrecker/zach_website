import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import './Northwoods.css'
import SingleSlideSlide from '../../Components/SingleSlide';


const Northwoods = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };
    
      const handlePrevious = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      };

    const slides = [
        {
            title1: 'All for One',
            image1: 'North Woods 2022 Photos/All for One.png', // Adjust the path based on your directory structure
            alt1: 'Kids playing ultimate frisbee',
        },
        {
            title1: 'Brotherhood Passion',
            image1: 'North Woods 2022 Photos/Brotherhood Passion.png', // Adjust the path based on your directory structure
            alt1: 'Kids cheering after winning a swim competition',
        },
        {
            title1: 'Candlelit Strum',
            image1: 'North Woods 2022 Photos/Candlelit Strum.png', // Adjust the path based on your directory structure
            alt1: 'A lone guitar player lit under candles',
        },
        {
            title1: 'Cleanse',
            image1: 'North Woods 2022 Photos/Cleanse.png', // Adjust the path based on your directory structure
            alt1: 'Kids being hosed by water, illuminated by the sun',
        },
        {
            title1: 'Collaboration',
            image1: 'North Woods 2022 Photos/Collaboration.png', // Adjust the path based on your directory structure
            alt1: 'Kids helping each other during a tree house climb',
        },
        {
            title1: 'Feel the Rhythm',
            image1: 'North Woods 2022 Photos/Feel the Rhythm.png', // Adjust the path based on your directory structure
            alt1: 'A boy breakdancing',
        },
        {
            title1: 'Gimme 5!',
            image1: 'North Woods 2022 Photos/Gimme 5!.png', // Adjust the path based on your directory structure
            alt1: 'Two boys dapping each other up after scoring a basket in basketball',
        },
        {
            title1: 'Gotcha!',
            image1: 'North Woods 2022 Photos/Gotcha!.png', // Adjust the path based on your directory structure
            alt1: 'A boy diving and catching a frisbee thrown off the dock into the lake',
        },
        {
            title1: 'King of the Mat',
            image1: 'North Woods 2022 Photos/King of the Mat.png', // Adjust the path based on your directory structure
            alt1: 'Two boys playing king of the mat on the lake',
        },
        {
            title1: 'Moment of Truth',
            image1: 'North Woods 2022 Photos/Moment of Truth.png', // Adjust the path based on your directory structure
            alt1: 'A boy about to shoot a layup. Will he make it?',
        }, 
        {
            title1: 'Motion Blur',
            image1: 'North Woods 2022 Photos/Motion Blur.png', // Adjust the path based on your directory structure
            alt1: 'A boy spinning a basketball on his finger',
        },
        {
            title1: 'Paddle Pleasure',
            image1: 'North Woods 2022 Photos/Paddle Pleasure.jpg', // Adjust the path based on your directory structure
            alt1: 'A boy smiling while paddleboarding',
        },
        {
            title1: 'Photography of Photography of Photography',
            image1: 'North Woods 2022 Photos/Photography of Photography of Photography.jpg', // Adjust the path based on your directory structure
            alt1: 'Kids helping each other during a tree house climb',
        },
        {
            title1: 'Playful Evening',
            image1: 'North Woods 2022 Photos/Playful Evening.jpg', // Adjust the path based on your directory structure
            alt1: 'Kids playing in the water under the sunset',
        }, 
        {
            title1: 'Rainy Day Surfs',
            image1: 'North Woods 2022 Photos/Rainy Day Surfs-2.jpg', // Adjust the path based on your directory structure
            alt1: '4 kids playing in the mud',
        }, 
        {
            title1: 'Release',
            image1: 'North Woods 2022 Photos/Release.jpg', // Adjust the path based on your directory structure
            alt1: 'A boy releasing an arrow to hit his target',
        }, 
        {
            title1: 'Soulful Stare',
            image1: 'North Woods 2022 Photos/Soulful Stare.jpg', // Adjust the path based on your directory structure
            alt1: 'A boy with face paint staring directly into the camera',
        },
        {
            title1: 'Sunset Silhouette',
            image1: 'North Woods 2022 Photos/Sunset Silhouette.jpg', // Adjust the path based on your directory structure
            alt1: 'A boy facing and contemplating the sunset on the lake',
        },
        {
            title1: 'The Beautiful Lake',
            image1: 'North Woods 2022 Photos/The Beautiful Lake.png', // Adjust the path based on your directory structure
            alt1: 'A sunset photo with glimmers on the lake',
        }, 
        {
            title1: 'The Final Night',
            image1: 'North Woods 2022 Photos/The Final Night.jpg', // Adjust the path based on your directory structure
            alt1: 'A camp photo of all the campers in the mess hall on the final night',
        },
        {
            title1: 'Tightrope Pivot',
            image1: 'North Woods 2022 Photos/Tightrope Pivot.png', // Adjust the path based on your directory structure
            alt1: 'A boy attempting the tightrope challenge',
        },
        {
            title1: 'Time for Battle',
            image1: 'North Woods 2022 Photos/Time for Battle.jpg', // Adjust the path based on your directory structure
            alt1: 'A still photo of two teams about to engage in tug-a-war',
        },
        {
            title1: 'Winding Down',
            image1: 'North Woods 2022 Photos/Winding Down.png', // Adjust the path based on your directory structure
            alt1: 'A camp counselor playing guitar on a floating bouey on the lake',
        },
        {
            title1: 'With Style',
            image1: 'North Woods 2022 Photos/With Style.jpg', // Adjust the path based on your directory structure
            alt1: 'A boy having fun water skiing',
        }, 
        {
            title1: 'WOAH',
            image1: 'North Woods 2022 Photos/WOAH.jpg', // Adjust the path based on your directory structure
            alt1: 'A boy about to be lifted into the air while tubing',
        }
      ];

    return (
        <div className='northwoods-page'>
            <Navbar />
            <div className='centered-container'>
                <div className='northwoods-artist-statement-card'>
                    <h2>Artist Statement</h2>
                    <p>
                    In the summer of 2022, I had the pleasure of assuming the role as camp photographer at<br/> 
                    my beloved summer camp: North Woods Camp of YMCA of Greater Boston on Lake<br/> 
                    Winnipesaukee, New Hampshire. In this role, I was tasked with capturing any and all aspects of<br/> 
                    the camp experience: action and candids, portraits, and landscapes. This position helped me learn<br/> 
                    about and develop management towards various vital features of what makes a great<br/> 
                    photographer: composition, lighting, visual storytelling, and editing. Here I include some of my<br/> 
                    favorite images that I feel show moments of the amazing experience of North Woods Camp<br/> 
                    and my personal style of photography!
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

export default Northwoods;