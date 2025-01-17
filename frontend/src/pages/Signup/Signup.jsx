import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for redirection
import axios from 'axios'; // Import axios for HTTP requests
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file for Toastify
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Handle signup form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords don't match. Please try again.", {
        autoClose: 3000, // Close the error toast after 3 seconds
      });
      return;
    }

    try {
      // Make the API request to backend for user registration
      const response = await axios.post('http://localhost:4000/api/auth/signup', {
        name,
        email,
        password
      });

      if (response.status === 201) {
        toast.success('Account created successfully!', {
          autoClose: 3000, // Close the success toast after 3 seconds
        });

        // Redirect to login page after a delay
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after the toast
        }, 3000); // Wait for 3 seconds before redirecting
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Error creating account. Please try again later.', {
        autoClose: 3000, // Close the error toast after 3 seconds
      });
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </div>

      {/* ToastContainer to render notifications */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
