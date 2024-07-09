import React, { useState, useEffect } from 'react';
import '../assets/css/SlideShow'; // Optional: Add CSS for styling

const images = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg'
    // Add more image paths as needed
];

function SlideShow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="slideshow-container">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
        </div>
    );
}

export default SlideShow;
