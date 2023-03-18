import Cards from '../app/components/ui/cards/cardsList';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Cards component', () => {
  it('displays Loading... when isLoading is true', () => {
    render(<Cards data={{ products: [] }} isLoading={true} />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  it('displays product cards when isLoading is false and data is not empty', () => {
    const data = {
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
    render(<Cards data={data} isLoading={false} />);
    const products = screen.getAllByTestId('card-item');
    expect(products.length).toBe(data.products.length);
  });

  it('displays no product cards when isLoading is false and data is empty', () => {
    const data = { products: [] };
    render(<Cards data={data} isLoading={false} />);
    const products = screen.queryAllByTestId('card-item');
    expect(products.length).toBe(0);
  });
});
