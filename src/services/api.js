// src/services/api.js
import axios from 'axios';

export const fetchPets = () => axios.get('https://monitor-backend-rust.vercel.app/api/pets');
export const fetchProducts = () => axios.get('https://monitor-backend-rust.vercel.app/api/products');
