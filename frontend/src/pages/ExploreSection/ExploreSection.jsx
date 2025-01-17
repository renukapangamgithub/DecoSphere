// In ExploreSection.jsx, don't import Router
// Just import necessary components

import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import './ExploreSection.css';

function ExploreSection() {
  return (
    <div className="explore-section">
      <div className="explore-content">
        <div className="explore-title">
          Explore Trending Styles
        </div>
        <div className="explore-buttons">
          <button className="explore-button">Still Life</button>
          <button className="explore-button">Motivational</button>
          <button className="explore-button">Nature</button>
          <button className="explore-button">Photography</button>
          <button className="explore-button">Abstract</button>
        </div>
        <div className="explore-banner">
          <div className="banner-text">
            Inspiring self-expression by celebrating creativity.
            <Link to="/about">
              <button className="learn-more-button">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="scrolling-heading">
          - - Explore - - Explore - - Explore - - Explore - - Explore - - Explore - -
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
