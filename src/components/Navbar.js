import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleSearch, searchTerm, setSearchTerm }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'} shadow-md py-4`}>
      <div className="container mx-auto flex justify-between items-center px-4">
      
        {/* Logo */}
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-500'}`}>
          <Link to="/">Monito</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden block text-gray-700 dark:text-gray-200 focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center`}>
          <Link to="/" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-300' : ''}`}>Home</Link>
          <Link to="/category" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-300' : ''}`}>Category</Link>
          <Link to="/product" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-300' : ''}`}>Product Details</Link>
          <Link to="/about" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-300' : ''}`}>About</Link>
          <Link to="/contact" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-300' : ''}`}>Contact</Link>
        </div>

        {/* Search Bar, Join Button, and Dark Mode Toggle */}
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0`}>
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search something here..."
              className={`px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white focus:ring-gray-400' : 'border-blue-500 focus:ring-blue-500'}`}
            />
            <button 
              type="submit" 
              className={`px-4 py-2 rounded-r-md transition duration-300 ease-in-out ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              Search
            </button>
          </form>
          <Link to="/join-community">
            <button className={`px-4 py-2 rounded-md transition duration-200 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
              Join the Community
            </button>
          </Link>
          <button 
            onClick={toggleDarkMode} 
            className="ml-4 p-2 rounded-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition duration-200"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
