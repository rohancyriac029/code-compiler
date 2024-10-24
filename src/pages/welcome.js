// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Import the CSS file for styling
import LeftImage from './mainlogo.png'; // Replace 'yourImage.png' with the path to your selected image

const Welcome = () => {
  return (
    <div className="welcome-container">
      {/* Left Side with Image */}
      <div className="left-pane">
        <img src={LeftImage} alt="Welcome" className="left-image" />
      </div>

      {/* Right Side with Sign In Button */}
      <div className="right-pane">
        <h1>Welcome to My React App</h1>
        <p>Get started on your problem-solving journey!</p>
        
        {/* Link to Home Page */}
        <Link to="/home" className="signin-button">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
