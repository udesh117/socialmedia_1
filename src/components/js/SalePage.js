import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext';
import "../css/SalePage.css"; // Import the CSS file for styling

const SalePage = () => {
  const [saleItems, setSaleItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('/shoes.json')
      .then(response => response.json())
      .then(data => setSaleItems(data))
      .catch(error => console.error('Error fetching sale items data:', error));
  }, []);

  return (
    <div className="sale-page">
      <h1>TODAY'S SALE </h1>
      <img src="/images/sale.png" alt="Shop" className="background-image" />
      <h1>GET FLAT 50% OFF </h1>
      <div className="sale-list">
        {saleItems.map((item, index) => (
          <div className="sale-card" key={index}>
            <img src={item.image} alt={item.name} className="sale-image" />
            <h2>{item.name}</h2>
            <p>{item.model}</p>
            <p>{item.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h1>GET FLAT 30% OFF ON WOMEN SHOES</h1>
    </div>
  );
};

export default SalePage;