import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemsList from './items-list';

const mockResponse = [
  {
    id: '1',
    alt_description: 'test',
    description: 'test',
    likes: 0,
    created_at: '2000-01-01',
    urls: {
      regular: 'https://example.com/image.jpg',
      small: 'https://example.com/image.jpg',
    },
    user: {
      name: 'test',
      username: 'test',
    },
  },
  {
    id: '2',
    alt_description: 'test',
    description: 'test',
    likes: 0,
    created_at: '2000-01-01',
    urls: {
      regular: 'https://example.com/image.jpg',
      small: 'https://example.com/image.jpg',
    },
    user: {
      name: 'test',
      username: 'test',
    },
  },
];

describe('Cards component', () => {
  it('displays Loading... when isLoading is true', () => {
    render(<ItemsList data={[]} isLoading={true} className="" onPageChange={() => {}} />);
    const loading = screen.getByTestId('loader');
    expect(loading).toBeInTheDocument();
  });

  it('displays product cards when isLoading is false and data is not empty', () => {
    render(
      <ItemsList data={mockResponse} isLoading={false} className="" onPageChange={() => {}} />
    );
    const products = screen.getAllByTestId('card-item');
    expect(products.length).toBe(mockResponse.length);
  });

  it('displays no product cards when isLoading is false and data is empty', () => {
    render(<ItemsList data={[]} isLoading={true} className="" onPageChange={() => {}} />);
    const products = screen.queryAllByTestId('card-item');
    expect(products.length).toBe(0);
  });

  it('should show loader when loading', () => {
    const { getByTestId } = render(
      <ItemsList data={mockResponse} isLoading={true} className="" onPageChange={() => {}} />
    );
    const loader = getByTestId('loader');
    expect(loader).toBeTruthy();
  });
  it('should show pagination buttons', () => {
    const { getByText } = render(
      <ItemsList data={mockResponse} isLoading={false} className="" onPageChange={() => {}} />
    );
    const prevButton = getByText('Prev');
    const nextButton = getByText('Next');
    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });

  it('calls handlePrev function on Prev button click', () => {
    const mockHandlePrev = jest.fn();
    render(
      <ItemsList
        data={mockResponse}
        page={2}
        onPageChange={mockHandlePrev}
        isLoading={false}
        className=""
      />
    );
    const prevButton = screen.getByText('Prev');
    fireEvent.click(prevButton);
    expect(mockHandlePrev).toHaveBeenCalledTimes(1);
  });

  it('calls handleNext function on Next button click', () => {
    const mockHandleNext = jest.fn();
    render(
      <ItemsList
        data={mockResponse}
        page={2}
        onPageChange={mockHandleNext}
        isLoading={false}
        className=""
      />
    );
    const prevButton = screen.getByText('Next');
    fireEvent.click(prevButton);
    expect(mockHandleNext).toHaveBeenCalledTimes(1);
  });
});
