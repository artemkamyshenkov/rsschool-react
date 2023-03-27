import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemCard from './item-card';

const mockItem = {
  id: 1,
  title: 'Test Item',
  category: 'Test Category',
  brand: 'Test Brand',
  price: 9.99,
  stock: 10,
  images: ['test-image.png'],
};

describe('CardItem', () => {
  it('renders card item', () => {
    render(<ItemCard item={mockItem} />);

    const name = screen.getByText('Test Item');
    const category = screen.getByText('Category: Test Category');
    const brand = screen.getByText('Brand: Test Brand');
    const price = screen.getByText('Price: 9.99€');
    const stock = screen.getByText('Stock: 10');
    const button = screen.getByText('Add to cart');

    expect(name).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(stock).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
