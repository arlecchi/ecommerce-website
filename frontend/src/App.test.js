import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// ✅ Move this line before the test
jest.mock('axios');

test('renders the MerchVerse brand name', async () => {
  // ✅ Mock axios.get to return fake product data
  axios.get.mockResolvedValue({
    data: [
      { id: 1, name: 'Mock Product', image: 'mock.jpg', price: 10 },
      // add more mock items if needed
    ],
  });

  render(<App />);

  // ✅ Wait for the component to render the brand text
  const brands = await screen.findAllByText(/MerchVerse/i);
  expect(brands.length).toBeGreaterThan(0);
});
//this works