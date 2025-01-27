import React from 'react';
import { Link } from 'react-router-dom';
import "../css/ShopPage.css"; // Import the CSS file for styling


const ShopPage = () => {
  return (
    <div className="shop-page">
      <img src="/images/m1.png" alt="Shop" className="background-image" />
      <div className="content_1">
        
        <Link to="/men" className="shop-button_2">Shop Men's Collection</Link>
        <Link to="/women" className="shop-button_2">Shop Women's Collection</Link>
      </div>
    </div>
  );
};

export default ShopPage;