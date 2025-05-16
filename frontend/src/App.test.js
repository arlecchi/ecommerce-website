import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the MerchVerse brand name', () => {
  render(<App />);
  const brands = screen.getAllByText(/MerchVerse/i);
  expect(brands.length).toBeGreaterThan(0);
});

jest.mock('axios');