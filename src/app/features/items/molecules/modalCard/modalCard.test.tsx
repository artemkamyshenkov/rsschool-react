import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalCard from './modalCard';

const mockItem = {
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
};

describe('ModalCard', () => {
  test('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <ModalCard item={mockItem} onCloseModal={() => {}} showModal onBackdropModal={() => {}} />
    );
    expect(getByText('test')).toBeInTheDocument();
    expect(getByText('test')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('2000-01-01')).toBeInTheDocument();
  });
});
