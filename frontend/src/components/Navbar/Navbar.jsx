import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Removed FaSearch and FaShoppingCart
import { AuthContext } from "../../context/AuthContext"; // Import the AuthContext
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext); // Access auth state from context
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Prevent logged-in users from accessing the login page
  useEffect(() => {
    if (isAuthenticated && window.location.pathname === '/login') {
      navigate('/'); // Redirect to homepage if logged in and trying to access login page
    }
  }, [isAuthenticated, navigate]);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          DecoSphere
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </button>

        {/* Mobile Navigation */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>SaleSection</Link></li>
          <li><Link to="/trending" className="nav-item" onClick={() => setIsMenuOpen(false)}>TrendingCollections</Link></li>
          <li><Link to="/explore" className="nav-item" onClick={() => setIsMenuOpen(false)}>ExploreSection</Link></li>
          <li><Link to="/about" className="nav-item" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/inspiration" className="nav-item inspiration" onClick={() => setIsMenuOpen(false)}>Inspiration</Link></li>
        </ul>

        {/* Profile Icon (Visible on all screens) */}
        <div className="nav-icons">
          {/* Conditionally render Login/Logout */}
          {isAuthenticated ? (
            <button onClick={logout} className="icon-btn logout" aria-label="Logout">
              Logout
            </button>
          ) : (
            <Link to="/login" className="icon-btn" aria-label="Login">
              <FaUser className="icon" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
