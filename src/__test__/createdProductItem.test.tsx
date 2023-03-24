import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreatedProductItem from '../app/components/ui/cards/createdProductItem';

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
