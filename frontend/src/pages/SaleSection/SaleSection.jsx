import React, { useState, useEffect } from "react";
import "./saleSection.css";

import bed1 from "../../assets/images/bed1.jpg";
import chair from "../../assets/images/chair.jpg";
import diningTable from "../../assets/images/dinning_table.jpg";
import bed2 from "../../assets/images/bed2.jpg";
import homedecor1 from "../../assets/images/homedecor1.jpg";
import homedecor2 from "../../assets/images/homedecor2.jpg";

const images = [bed1, chair, diningTable, bed2, homedecor1, homedecor2];

const SaleSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="sale-section">
      {/* Heading Section */}
      <div className="sale-heading">
        <h1>Hello 2025 Sale</h1>
        <p>Up to 25% Off Bedding, Bath & More. Shop the Sale!</p>
      </div>

      {/* Carousel Container */}
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={prevImage}>
          ‹
        </button>

        <div
          className="carousel"
          style={{
            transform: isMobile
              ? `translateX(-${100 * currentIndex}%)` 
              : `translateX(-${33 * currentIndex}%)`, 
          }}
        >
          {images.map((image, index) => (
            <div
              className={`carousel-item ${currentIndex === index ? "center" : ""}`}
              key={index}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={nextImage}>
          ›
        </button>
      </div>
    </section>
  );
};

export default SaleSection;
