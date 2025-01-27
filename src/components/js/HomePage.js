import React from 'react';
import "../css/HomePage.css"; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <video className="background-video" autoPlay loop muted>
        <source src="/okay.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
     
    </div>
  );
};

export default HomePage;