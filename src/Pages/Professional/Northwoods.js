import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import './Northwoods.css'


const Northwoods = () => {

    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleScroll = () => {
        // Show the scroll-to-top button when scrolling down, and hide it when at the top
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setShowScrollTop(scrollTop > 100);
    };

    const scrollToTop = () => {
        // Smoothly scroll to the top of the page
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    // Attach the scroll event listener to the window
    // This will trigger the handleScroll function on scroll
    window.addEventListener('scroll', handleScroll);

    return (
        <div className='northwoods-page'>
            <Navbar />
            <div className='centered-container'>
                <div className='artist-statement-card'>
                    <h2>Artist Statement</h2>
                    <p>
                    In the summer of 2022, I had the pleasure of assuming the role as camp photographer at<br/> 
                    my beloved summer camp: North Woods Camp of YMCA of Greater Boston on Lake<br/> 
                    Winnipesaukee, New Hampshire. In this role, I was tasked with capturing any and all aspects of<br/> 
                    the camp experience: action and candids, portraits, and landscapes. This position helped me learn<br/> 
                    about and develop management towards various vital features of what makes a great<br/> 
                    photographer: composition, lighting, visual storytelling, and editing. Here I include some of my<br/> 
                    favorite moments that I feel show moments of the amazing experience of North Woods Camp<br/> 
                    and my personal style of photography!
                    </p>
                </div>
            </div>
            <div className='northwoods-image-container'>
                <img src="North Woods 2022 Photos/Cleanse.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/All for One.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Brotherhood Passion.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Candlelit Strum.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Collaboration.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Feel the Rhythm.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Gimme 5!.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Gotcha!.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/King of the Mat.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Moment of Truth.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Motion Blur.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Paddle Pleasure.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Photography of Photography of Photography.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Playful Evening.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Rainy Day Surfs-2.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Release.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Soulful Stare.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Sunset Silhouette.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/The Beautiful Lake.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/The Final Night.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Tightrope Pivot.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Time for Battle.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/Winding Down.png" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/With Style.jpg" alt="" className='northwoods-images'/>
                <img src="North Woods 2022 Photos/WOAH.jpg" alt="" className='northwoods-images'/>
            </div>

            {showScrollTop && (
                <button className='scroll-top-button' onClick={scrollToTop}>
                {/* You can use an up arrow icon or any other representation */}
                &#9650; {/* Unicode character for an upward-pointing arrow */}
                </button>
            )}

        </div>
      );

}

export default Northwoods;