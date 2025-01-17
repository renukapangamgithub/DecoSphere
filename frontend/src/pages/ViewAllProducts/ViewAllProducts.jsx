import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ViewAllProducts.css';

const ViewAllProducts = () => {
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // To store the last scroll position
  const [scrollDirection, setScrollDirection] = useState(0); // To track the scroll direction (1 for up, -1 for down)

  // Track scroll event to toggle "scrolled" class and scroll direction
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Determine if the user is scrolling up or down
    if (currentScrollY > lastScrollY) {
      setScrollDirection(-1); // Scrolling down
    } else {
      setScrollDirection(1); // Scrolling up
    }

    setLastScrollY(currentScrollY);

    if (currentScrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="view-all-products-container">
      <h1 className="page-title">View All Products</h1>
      <div className="sections-container">
        {/* Sale Section */}
        <section className="section-item">
          <h2 className="section-title">Sale</h2>
          <p className="section-description">Exclusive discounts on selected products.</p>
          <div className="product-grid">
            {/* Product cards go here */}
          </div>
          <Link to="/sale">
            <button className="explore-button">Explore Sale</button>
          </Link>
        </section>

        {/* Trending Collection */}
        <section className="section-item">
          <h2 className="section-title">Trending Collection</h2>
          <p className="section-description">Shop the most popular products right now.</p>
          <div className="product-grid">
            {/* Product cards go here */}
          </div>
          <Link to="/trending">
            <button className="explore-button">Explore Trending</button>
          </Link>
        </section>

        {/* Explore Section */}
        <section className="section-item">
          <h2 className="section-title">Explore</h2>
          <p className="section-description">Discover new arrivals and bestsellers.</p>
          <div className="product-grid">
            {/* Product cards go here */}
          </div>
          <Link to="/explore">
            <button className="explore-button">Explore Explore</button>
          </Link>
        </section>

        {/* Bedding Section */}
        <section className="section-item">
          <h2 className="section-title">Bedding</h2>
          <p className="section-description">Find comfort in our premium bedding collection.</p>
          <div className="product-grid">
            {/* Product cards go here */}
          </div>
          <Link to="/bedding">
            <button className="explore-button">Explore Bedding</button>
          </Link>
        </section>
      </div>

      {/* Repeating Heading Section */}
      <div className={`repeating-heading ${scrolling ? 'scrolled' : ''}`}>
        <h2
          style={{
            transform: `translateX(${scrollDirection * 50}%)`, // Move title left or right based on scroll direction
          }}
        >
          {/* Repeating text */}
          <span>View All Products : </span>
          <span>View All Products : </span>
          <span>View All Products : </span>
          <span>View All Products : </span>
          <span>View All Products : </span>
          <span>View All Products : </span>
          <span>View All Products : </span>
        </h2>
      </div>
    </div>
  );
};

export default ViewAllProducts;
