import React from 'react';
import facebookIcon from '../images/SocialMedia/Facebook LOGO.png'; // Update the path as per your directory structure
import instagramIcon from '../images/SocialMedia/Instagram LOGO.png'; // Update the path as per your directory structure
import youtubeIcon from '../images/SocialMedia/Youtube.png'; // Update the path as per your directory structure
import twitterIcon from '../images/SocialMedia/x.png'; // Update the path as per your directory structure

const Footer = ({ email, setEmail, emailError, handleSubscribe }) => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Register Section */}
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <p className="text-lg mr-0 md:mr-4 text-center md:text-left">
            One More Friends
          </p>
          {/* <form onSubmit={handleSubscribe} className="flex mt-2 md:mt-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="px-4 py-2 rounded-md text-gray-800"
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md ml-2 hover:bg-blue-600 transition duration-200 ease-in-out">
              Subscribe Now
            </button>
          </form> */}
          {emailError && <p className="text-red-500 ml-4">{emailError}</p>}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4 md:mt-8">
          <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="h-10 w-10 hover:opacity-75 transition duration-200" />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="h-10 w-10 hover:opacity-75 transition duration-200" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="h-10 w-10 hover:opacity-75 transition duration-200" />
          </a>
          <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="h-10 w-10 hover:opacity-75 transition duration-200" />
          </a>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="my-4 border-gray-600" />

      {/* Navigation Links */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:underline">Home</a>
          <a href="/category" className="hover:underline">Category</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
        <p className="text-center mt-4 md:mt-0 text-sm">© 2024 One More Friend. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
