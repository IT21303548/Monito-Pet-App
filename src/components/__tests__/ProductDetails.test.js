import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductDetails from './ProductDetails'; // Adjust the path if necessary
import '@testing-library/jest-dom/extend-expect';

// Mock the fetch API for customers and related pets
global.fetch = jest.fn();

describe('ProductDetails Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders ProductDetails component', async () => {
    // Mock the API response for customers and pets
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([
        { image: 'customer1.jpg' },
        { image: 'customer2.jpg' },
      ]),
    });

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([
        { id: 1, name: 'Shiba Inu', price: '$3,000.00', image: 'shiba.jpg' },
        { id: 2, name: 'Golden Retriever', price: '$2,500.00', image: 'golden.jpg' },
      ]),
    });

    render(<ProductDetails />);

    // Check if the main title is rendered
    expect(screen.getByText(/Shiba Inu Sepia/i)).toBeInTheDocument();
    expect(screen.getByText(/\$3,000.00 USD/i)).toBeInTheDocument();
  });

  test('validates email subscription input', async () => {
    render(<ProductDetails />);

    // Enter an invalid email and check the error message
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(screen.getByText(/Subscribe/i));

    expect(await screen.findByText(/Email address is invalid./i)).toBeInTheDocument();
    
    // Enter a valid email and check the success
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: 'test@example.com' },
    });

    fireEvent.click(screen.getByText(/Subscribe/i));

    // Wait for the email error to disappear
    await waitFor(() => {
      expect(screen.queryByText(/Email address is invalid./i)).not.toBeInTheDocument();
    });
  });

  test('renders customers and related pets', async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([
        { image: 'customer1.jpg' },
        { image: 'customer2.jpg' },
      ]),
    });

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([
        { id: 1, name: 'Shiba Inu', price: '$3,000.00', image: 'shiba.jpg' },
        { id: 2, name: 'Golden Retriever', price: '$2,500.00', image: 'golden.jpg' },
      ]),
    });

    render(<ProductDetails />);

    expect(await screen.findByAltText(/Customer 1/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/Customer 2/i)).toBeInTheDocument();

    expect(await screen.findByText(/Shiba Inu/i)).toBeInTheDocument();
    expect(await screen.findByText(/\$3,000.00/i)).toBeInTheDocument();
  });
});
