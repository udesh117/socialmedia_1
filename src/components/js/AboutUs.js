import React from 'react';
import { Link } from 'react-router-dom';
import "../css/AboutUs.css"; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <video className="background-video" autoPlay loop muted>
        <source src="/aboutus.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        
        <Link to="/shop" className="shop-button_1">Shop Now</Link>
    
      </div>
    </div>
  );
};

export default AboutUs;