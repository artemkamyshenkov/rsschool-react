import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreatedProductItem from '../app/components/ui/cards/createdProductItem';

const mockCreatedItem = {
  id: 1,
  title: 'Test Item',
  date: '2023-01-01',
  category: 'Test Category',
  brand: 'Test Brand',
  price: 9.99,
  images: 'test-image.png',
  isChecked: true,
  publicDays: '60',
};

describe('CreatedProductItem component', () => {
  const mockItem = {
    id: 1,
    images: 'https://example.com/image.png',
    title: 'Example product',
    date: '2022-01-01',
    category: 'Example category',
    price: 100,
    publicDays: '30',
    isChecked: true,
  };

  it('renders all item details correctly', () => {
    render(<CreatedProductItem item={mockItem} />);

    expect(screen.getByAltText('Img')).toBeInTheDocument();
    expect(screen.getByText(/Example product/)).toBeInTheDocument();
    expect(screen.getByText(/2022-01-01/)).toBeInTheDocument();
    expect(screen.getByText(/Example category/)).toBeInTheDocument();
    expect(screen.getByText(/100€/)).toBeInTheDocument();
    expect(screen.getByText(/30 days/)).toBeInTheDocument();
    expect(screen.getByText(/yes/)).toBeInTheDocument();
  });
});

// it('renders created card item', () => {
//   render(<CreatedProductItem item={mockCreatedItem} />);

//   const name = screen.getByText('Test Item');
//   const date = screen.getByText(/Date: 2023-01-01/i);
//   // const category = screen.getByText('Category: Test Category');
//   // const brand = screen.getByText('Brand: Test Brand');
//   // const price = screen.getByText('Price: 9.99€');
//   // const agreement = screen.getByText('Agreement: yes');
//   // const duration = screen.getByText('Duration: 60 days');

//   expect(name).toBeInTheDocument();
//   expect(date).toBeInTheDocument();
//   // expect(category).toBeInTheDocument();
//   // expect(brand).toBeInTheDocument();
//   // expect(price).toBeInTheDocument();
//   // expect(agreement).toBeInTheDocument();
//   // expect(duration).toBeInTheDocument();
// });

// it('renders all item details correctly', () => {
//   const { getByRole, getByText } = render(<CreatedProductItem item={mockCreatedItem} />);

//   expect(getByRole('img')).toHaveAttribute('src', mockItem.images);
//   expect(getByText(`Name: ${mockItem.title}`)).toBeInTheDocument();
//   expect(getByText(`Date: ${mockItem.date}`)).toBeInTheDocument();
//   expect(getByText(`Category: ${mockItem.category}`)).toBeInTheDocument();
//   expect(getByText(`Price: ${mockItem.price}€`)).toBeInTheDocument();
//   expect(getByText(`Duration: ${mockItem.publicDays} days`)).toBeInTheDocument();
//   expect(getByText('Agreement: yes')).toBeInTheDocument();
// });
