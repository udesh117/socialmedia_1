import React, { useEffect, useState, useContext } from 'react';
import "../css/MenPage.css";
import { CartContext } from './CartContext';

const MenPage = ({ searchQuery, filter }) => {
  const [shoes, setShoes] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('/shoes.json')
      .then(response => response.json())
      .then(data => setShoes(data))
      .catch(error => console.error('Error fetching shoes data:', error));
  }, []);

  const filteredShoes = shoes.filter(shoe => {
    return (
      shoe.category === 'men' &&
      shoe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter === '' || shoe.category === filter)
    );
  });

  return (
    <div className="men-page">
      <h1>Men's Shoes</h1>
      <div className="shoe-list">
        {filteredShoes.map((shoe, index) => (
          <div className="shoe-card" key={index}>
            <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <h2>{shoe.name}</h2>
            <p>{shoe.model}</p>
            <p>{shoe.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenPage;