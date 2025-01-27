import React, { useEffect, useState } from 'react';
import "../css/WomenPage.css"; // Import the CSS file for styling

const WomenPage = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('womenshoes.json') // Use absolute path from the public directory
      .then(response => response.json())
      .then(data => setShoes(data))
      .catch(error => console.error('Error fetching shoes data:', error));
  }, []);

  return (
    <div className="women-page">
      <h1>Women's Shoes</h1>
      <div className="shoe-list">
        {shoes.map((shoe, index) => (
          <div className="shoe-card" key={index}>
            <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <h2>{shoe.name}</h2>
            <p>{shoe.model}</p>
            <p>{shoe.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenPage;