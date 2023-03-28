import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemsList from './items-list';
describe('Cards component', () => {
  it('displays Loading... when isLoading is true', () => {
    render(<ItemsList data={[]} isLoading={true} className="" />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  it('displays product cards when isLoading is false and data is not empty', () => {
    const data = [
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
    ];

    render(<ItemsList data={data} isLoading={false} className="" />);
    const products = screen.getAllByTestId('card-item');
    expect(products.length).toBe(data.length);
  });

  it('displays no product cards when isLoading is false and data is empty', () => {
    render(<ItemsList data={[]} isLoading={false} className="" />);
    const products = screen.queryAllByTestId('card-item');
    expect(products.length).toBe(0);
  });
});
