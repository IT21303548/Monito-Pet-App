import React, { useState, useEffect } from 'react';
import axios from 'axios';
import petImage from '../images/HomePet.jpeg';
import { default as petImage1, default as petImage2, default as petImage3 } from '../images/Pet.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { motion } from 'framer-motion';



const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [petsResponse, productsResponse] = await Promise.all([
          axios.get('https://monitor-backend-rust.vercel.app/api/pets'),
          axios.get('https://monitor-backend-rust.vercel.app/api/products'),
        ]);
        setPets(petsResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email cannot be empty.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid.');
    } else {
      setEmailError('');
      console.log('Subscribing with email:', email);
    }
  };

 

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <Navbar 
        handleSearch={handleSearch} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto py-10 flex flex-col lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            One More Friend
          </motion.h2>
          <motion.h3 
            className="text-xl md:text-2xl text-blue-500 mb-4" 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Thousands More Fun!
          </motion.h3>
          <motion.p 
            className="mb-6" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. 
            We have 200+ different pets that can meet your needs!
          </motion.p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <Link to="/intro">
              <motion.button 
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
                whileHover={{ scale: 1.05 }}
              >
                View Intro
              </motion.button>
            </Link>
            <motion.button 
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              Explore Now
            </motion.button>
          </div>
        </div>
        <div className="flex-1">
          <motion.img 
            src={petImage} 
            alt="Pet" 
            className="w-full h-auto rounded-lg shadow-lg" 
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.5 }}
          />
        </div>
      </section>

      {/* What's New Section */}
      <section className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <motion.h2 
            className="text-2xl font-semibold" 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            What's new?
          </motion.h2>
          <button className="text-blue-500 hover:underline">View more &gt;</button>
        </div>
        <h3 className="text-lg mb-4">Take A Look At Some Of Our Pets</h3>

        {/* Pet Slider Section with SwiperJS */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {loading ? (
            <SwiperSlide><p>Loading pets...</p></SwiperSlide>
          ) : (
            pets.map((pet) => (
              <SwiperSlide key={pet.id} className="bg-white rounded-lg shadow-md p-4">
                <motion.img 
                  src={pet.image} 
                  alt={`Pet ${pet.name}`} 
                  className="w-full h-48 object-cover rounded-md mb-4" 
                  initial={{ scale: 0.8 }} 
                  animate={{ scale: 1 }} 
                  transition={{ duration: 0.5 }}
                />
                <h4 className="text-lg font-semibold">{pet.name} - {pet.breed}</h4>
                <p>Gender: {pet.gender}</p>
                <p>Age: {pet.age}</p>
                <p className="text-blue-500 font-bold mt-2">${pet.price}</p>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </section>

      {/* Product Section */}
      <section className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <motion.h2 
            className="text-2xl font-semibold" 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Hard to choose the right products for your pets?
          </motion.h2>
          <button className="text-blue-500 hover:underline">View more &gt;</button>
        </div>
        <h3 className="text-lg mb-4">Our Products</h3>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <motion.div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md p-4"
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 0.5 }}
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-blue-500 font-bold mt-2">${product.price}</p>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Useful Pet Knowledge Section */}
      <section className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <motion.h2 
            className="text-2xl font-semibold" 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Useful Pet Knowledge
          </motion.h2>
          <button className="text-blue-500 hover:underline">View more &gt;</button>
        </div>
        <h3 className="text-lg mb-4">Explore More</h3>
        <img src={petImage2} alt="Pet Knowledge" className="rounded-lg shadow-lg mb-4" />
      </section>

      {/* Subscribe Section */}
      <section className="bg-blue-500 text-white py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe Now</h3>
          <p className="mb-6">Get the latest updates and special offers.</p>
          <form onSubmit={handleSubscribe} className="flex justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="px-4 py-2 rounded-l-md border-2 border-white bg-transparent text-white placeholder-white"
            />
            <button type="submit" className="bg-white text-blue-500 px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
          {emailError && <p className="mt-2 text-red-200">{emailError}</p>}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
