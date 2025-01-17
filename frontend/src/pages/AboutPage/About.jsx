import React, { useEffect, useState } from "react";
import "./About.css";
import image1 from "../../assets/images/image1.jpg"; // Replace with your image paths
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";

const AboutPage = () => {
  const [lastScrollY, setLastScrollY] = useState(0); // To track the previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".row-gallery-item");
      const currentScrollY = window.scrollY; // Current scroll position

      // Determine the scroll direction (down or up)
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const imageOffset = parseInt(image.dataset.offset, 10); // Get the offset from dataset

        // If scrolling down, move images forward
        if (scrollDirection === "down") {
          if (rect.left < window.innerWidth && rect.right > 0) {
            image.style.transform = `translateX(-50px)`; // Move forward a bit
            image.style.opacity = "1";
          } else {
            image.style.transform = `translateX(${imageOffset}px)`;
            image.style.opacity = "0.3";
          }
        } else if (scrollDirection === "up") {
          // If scrolling up, move images backward
          if (rect.left < window.innerWidth && rect.right > 0) {
            image.style.transform = `translateX(50px)`; // Move backward a bit
            image.style.opacity = "1";
          } else {
            image.style.transform = `translateX(${imageOffset}px)`;
            image.style.opacity = "0.3";
          }
        }
      });

      // Update lastScrollY to the current scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run the effect when scroll position changes

  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title">
          Inspiring Self-Expression by <br /> Celebrating Creativity
        </h1>
        <p className="about-description">
          DecoSphere connects you to the best designs by independent artists from
          around the world to inspire you to create your unique space.
        </p>
      </div>

      <div className="row-gallery">
        <img
          src={image1}
          alt="Design 1"
          className="row-gallery-item"
          data-offset="-300"
        />
        <img
          src={image2}
          alt="Design 2"
          className="row-gallery-item"
          data-offset="300"
        />
        <img
          src={image3}
          alt="Design 3"
          className="row-gallery-item"
          data-offset="-200"
        />
        <img
          src={image4}
          alt="Design 4"
          className="row-gallery-item"
          data-offset="200"
        />
        <img
          src={image5}
          alt="Design 5"
          className="row-gallery-item"
          data-offset="-400"
        />
        <img
          src={image6}
          alt="Design 6"
          className="row-gallery-item"
          data-offset="400"
        />
      </div>

      {/* New Section Below Images */}
      <div className="additional-content">
        <h1>Discover More Designs</h1>
        <p>
          Explore a vast collection of art, furniture, home decor, and much
          more created by talented artists from all over the globe.
        </p>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
};

export default AboutPage;
