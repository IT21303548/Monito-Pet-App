// Category.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Category from '../Category'; // Adjust this path to your Category component

describe('Category Component', () => {
  beforeEach(() => {
    render(<Category />);
  });

  test('renders the subscription form', () => {
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument();
  });

  test('shows error for empty email', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

    expect(await screen.findByText(/Email cannot be empty./i)).toBeInTheDocument();
  });

  test('shows error for invalid email format', async () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: 'invalid-email' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

    expect(await screen.findByText(/Email address is invalid./i)).toBeInTheDocument();
  });

  test('does not show error for valid email', async () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

    await waitFor(() => {
      expect(screen.queryByText(/Email cannot be empty./i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Email address is invalid./i)).not.toBeInTheDocument();
    });
  });
});
