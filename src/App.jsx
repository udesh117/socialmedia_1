import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/js/RegistrationForm';
import LoginForm from './components/js/LoginForm';
import Header from './components/js/Header';
import HomePage from './components/js/HomePage';
import MenPage from './components/js/Menpage';
import WomenPage from './components/js/WomenPage';
import AboutUs from './components/js/AboutUs';
import ShopPage from './components/js/ShopPage';



function App() {
  return (
  
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shop" element={<ShopPage />} /> 
          </Routes>
        </div>
      </Router>
   
  );
}

export default App;