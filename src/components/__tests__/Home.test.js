// Home.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../Home'; // Adjust this path to your Home component
import axios from 'axios';

// Mock axios
jest.mock('axios');

describe('Home Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText(/One More Friend/i)).toBeInTheDocument();
    expect(screen.getByText(/Thousands More Fun!/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
  });

  test('subscribes with valid email', async () => {
    render(<Home />);
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByText(/Subscribe/i));

    await waitFor(() => {
      expect(screen.queryByText(/Email cannot be empty/i)).not.toBeInTheDocument();
    });
  });

  test('shows error for empty email', async () => {
    render(<Home />);
    fireEvent.click(screen.getByText(/Subscribe/i));

    expect(await screen.findByText(/Email cannot be empty/i)).toBeInTheDocument();
  });

  test('fetches pets and products data', async () => {
    const petsData = [{ id: 1, name: 'Bella', breed: 'Labrador', gender: 'Female', age: '2', price: 200, image: 'pet1.jpg' }];
    const productsData = [{ id: 1, name: 'Dog Food', price: 50, image: 'product1.jpg' }];
    
    axios.get.mockImplementation((url) => {
      if (url === 'https://monitor-backend-rust.vercel.app/api/pets') {
        return Promise.resolve({ data: petsData });
      } else if (url === 'https://monitor-backend-rust.vercel.app/api/products') {
        return Promise.resolve({ data: productsData });
      }
      return Promise.reject(new Error('Not found'));
    });

    render(<Home />);
    expect(await screen.findByText(/Loading pets.../i)).toBeInTheDocument();
    expect(await screen.findByText(/Bella/i)).toBeInTheDocument();
    expect(await screen.findByText(/Dog Food/i)).toBeInTheDocument();
  });

  test('handles API error', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('Network Error')));
    
    render(<Home />);
    expect(await screen.findByText(/Loading pets.../i)).toBeInTheDocument();
  });
});
