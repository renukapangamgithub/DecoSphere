import React from "react";
import { FaPhoneAlt, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaPhoneAlt /> <a href="/contact" className="footer-link">Contact Us</a></p>
          <p><FaRegMessage /> Monday–Friday: 8am - 5pm PST</p>
          <p><CiLocationOn /> 3890 S Windermere St. Englewood, CO 80110</p>
        </div>
        <div className="footer-section">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Shipping Information</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Student Discount</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Wholesale Program</a></li>
            <li><a href="#">Trade Program</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Artist Support</h4>
          <ul>
            <li><a href="#">Sell Your Art</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <FaInstagram className="social-icon" />
        <FaPinterest className="social-icon" />
        <FaTiktok className="social-icon" />
      </div>
    </footer>
  );
};

export default Footer;
