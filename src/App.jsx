import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/js/RegistrationForm';
import LoginForm from './components/js/LoginForm';
import Header from './components/js/Header';
import HomePage from './components/js/HomePage';
import MenPage from './components/js/Menpage';
import WomenPage from './components/js/WomenPage';
import AboutUs from './components/js/AboutUs';
import ShopPage from './components/js/ShopPage';
import CartPage from './components/js/CartPage';
import SalePage from './components/js/SalePage';
import { CartProvider } from './components/js/CartContext';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header onSearch={setSearchQuery} onFilter={setFilter} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/men" element={<MenPage searchQuery={searchQuery} filter={filter} />} />
            <Route path="/women" element={<WomenPage searchQuery={searchQuery} filter={filter} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/sale" element={<SalePage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;