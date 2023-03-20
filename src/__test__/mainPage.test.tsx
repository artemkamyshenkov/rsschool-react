import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import MainPage from '../app/components/pages/mainPage';
import '@testing-library/jest-dom';
import fetchMock from 'fetch-mock';
import userEvent from '@testing-library/user-event';

const mockResponse = {
  products: [
    {
      brand: 'Brand',
      category: 'phone',
      id: 1,
      price: 10,
      title: 'Iphone',
      stock: 10,
      images: ['img.jpg'],
    },
    {
      brand: 'Brand',
      category: 'smart tv',
      id: 2,
      price: 10,
      title: 'Iphone',
      stock: 15,
      images: ['img.jpg'],
    },
  ],
};

describe('MainPage', () => {
  afterEach(() => {
    fetchMock.reset();
  });

  it('renders the page with product cards', async () => {
    fetchMock.mock('https://dummyjson.com/products?limit=30', {
      status: 200,
      body: mockResponse,
    });
    await act(async () => {
      render(<MainPage />);
    });
    expect(screen.getByTestId('cards')).toBeInTheDocument();
  });

  it('typing in Search works', async () => {
    fetchMock.mock('https://dummyjson.com/products?limit=30', {
      status: 200,
      body: mockResponse,
    });
    await act(async () => {
      render(<MainPage />);
    });
    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, 'test input');
    await waitFor(() => {
      expect(inputElement).toHaveValue('test input');
    });
  });
});
