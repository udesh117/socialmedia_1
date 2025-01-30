import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import "../css/Header.css"; // Import the CSS file

const Header = ({ onSearch, onFilter }) => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <header>
      <div className="special-offer">
        <p>Special Offer: Free Shipping on all orders above $100</p>
      </div>
      <div className="nav-links">
        <a href="#">Contact</a>
        <Link to="/cart">Cart ({cart.length})</Link>
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
        <Link to="/login">
            <i className="fas fa-user"></i>
          </Link>
        </div>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select value={filter} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>
      </nav>
      {showCart && (
        <div className="cart-dropdown">
          <h3>Shopping Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;