/*import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the MerchVerse brand name', () => {
  render(<App />);
  const brands = screen.getAllByText(/MerchVerse/i);
  expect(brands.length).toBeGreaterThan(0);
});

jest.mock('axios'); */

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./component/Navigation";

test("renders Navigation without crashing", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
});
