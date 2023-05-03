import CreatedProductList from './createdCardList';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ICreatedCard } from '../../molecules/createdCard/createdCard.types';
import '@testing-library/jest-dom';

describe('Cards component', () => {
  it('displays product cards when isLoading is false and data is not empty', () => {
    const data = [
      {
        id: 1,
        images: 'https://example.com/image.png',
        name: 'Example product',
        date: '2022-01-01',
        category: 'Example category',
        price: 100,
        publicDays: '30',
        isChecked: true,
      },
      {
        id: 2,
        images: 'https://example.com/image.png',
        name: 'Example product',
        date: '2022-01-01',
        category: 'Example category',
        price: 100,
        publicDays: '30',
        isChecked: true,
      },
    ];

    render(<CreatedProductList data={data} />);
    const products = screen.getAllByTestId('created-item');
    expect(products.length).toBe(data.length);
  });

  it('displays no product cards when isLoading is false and data is empty', () => {
    const data: ICreatedCard[] = [];
    render(<CreatedProductList data={data} />);
    const products = screen.queryAllByTestId('created-item');
    expect(products.length).toBe(0);
  });
});
