import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import './TrendingCollections.css'; // Import the CSS

// Importing images
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';

const collections = [
  { imgSrc: image1, title: 'Spring 2025 Style Guides' },
  { imgSrc: image2, title: 'Minimalist Home Decor' },
  { imgSrc: image3, title: 'Abstract Art Collection' },
  { imgSrc: image4, title: 'Modern Furniture' },
  { imgSrc: image5, title: 'Tech Gadgets' },
];

const TrendingCollections = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === collections.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? collections.length - 1 : prevIndex - 1
    );
  };

  // Calculate the next image index for the small image (next in the array)
  const nextImageIndex = currentImageIndex === collections.length - 1 ? 0 : currentImageIndex + 1;

  return (
    <div className="slider-container">
      <h2 className="slider-heading">Trending Collections</h2>
      <p>Discover the most popular and trending collections on DecoSphere!</p>
      {/* Row Layout for Big and Small Images */}
      <div className="image-row">
        {/* Big Image Container */}
        <div className="big-image-container">
          <img
            src={collections[currentImageIndex].imgSrc}
            alt={collections[currentImageIndex].title}
            className="big-image"
          />
          <div className="big-image-title">
            {collections[currentImageIndex].title}
          </div>
        </div>

        {/* Small Image Container */}
        <div className="small-image-container">
          <div className="small-image">
            <img
              src={collections[nextImageIndex].imgSrc} // Display the next image in the small div
              alt={collections[nextImageIndex].title}
            />
                <div className="slider-controler">
        <div className="swiper-button-prev" onClick={handlePrev}>
          <ArrowLeft size={20} />
        </div>
        <div className="swiper-button-next" onClick={handleNext}>
          <ArrowRight size={20} />
        </div>
      </div>
          </div>
        </div>
      </div>

      {/* Arrow Controls Below the Small Image */}
  
    </div>
  );
};

export default TrendingCollections;
