import React, { useEffect, useState } from 'react';
import "../css/MenPage.css"; // Import the CSS file for styling

const MenPage = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('/shoes.json')
      .then(response => response.json())
      .then(data => setShoes(data))
      .catch(error => console.error('Error fetching shoes data:', error));
  }, []);

  return (
    <div className="men-page">
      <h1>Men's Shoes</h1>
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

export default MenPage;