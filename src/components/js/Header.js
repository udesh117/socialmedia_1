import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header>
      <div className="special-offer">
        <p>Special Offer: Free Shipping on all orders above $100</p>
      </div>
      <div className="nav-links">
        <a href="#">Contact</a>
        <a href="#">Cart</a>
        <Link to="/RegistrationForm">Login</Link>
      </div>
      <nav className="main-nav">
        <a href="/" className="logo">Stylish <span>Online Store</span></a>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/about">Page</Link></li> {/* Link Page button to About Us */}
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/sale">Sale</Link></li>
        </ul>
        <div className="icons">
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-search"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;