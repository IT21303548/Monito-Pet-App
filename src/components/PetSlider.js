
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper';

const PetSlider = ({ pets }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation
      modules={[Navigation, Pagination]}
    >
      {pets.map((pet) => (
        <SwiperSlide key={pet.id}>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={pet.image} alt={`Pet ${pet.name}`} className="w-full h-48 object-cover rounded-md mb-4" />
            <h4 className="text-lg font-semibold">{pet.name} - {pet.breed}</h4>
            <p>Gender: {pet.gender}</p>
            <p>Age: {pet.age}</p>
            <p className="text-blue-500 font-bold mt-2">${pet.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PetSlider;
