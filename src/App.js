// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Category from './components/Category';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';



// Importing Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Intro from './components/Intro';
import JoinCommunity from './components/JoinCommunity';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={< ProductDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/join-community" element={<JoinCommunity />} />
      </Routes>
    </Router>
  );
};

export default App;
