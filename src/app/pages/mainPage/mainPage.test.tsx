import React from 'react';
import { render, screen, act, waitFor, getAllByRole } from '@testing-library/react';
import MainPage from './mainPage';
import '@testing-library/jest-dom';
import fetchMock from 'fetch-mock';
import userEvent from '@testing-library/user-event';
import photoService from '../../services/photo.service';

jest.mock('../../services/photo.service');
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

describe('MainPage', () => {
  test('renders without errors', () => {
    const { container } = render(<MainPage />);
    expect(container).toBeInTheDocument();
  });
  test('initial state is correct', () => {
    const { getByRole } = render(<MainPage />);
    expect(getByRole('textbox')).toHaveValue('');
    expect(getByRole('button', { name: /next/i })).toBeInTheDocument();
  });
  // test('loads photos on mount', async () => {
  //   const mockFetch = jest.fn().mockResolvedValueOnce(mockResponse);
  //   photoService.fetch = mockFetch;

  //   const { getAllByRole, getByRole } = render(<MainPage />);
  //   await waitFor(() => expect(getByRole('list')).toBeInTheDocument());

  //   const images = getAllByRole('img');
  //   expect(images.length).toBeGreaterThan(0);

  //   images.forEach((image) => {
  //     console.log(image);
  //     expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  //   });
  // });

  // it('typing in Search works', async () => {
  //   fetchMock.mock('https://dummyjson.com/products?limit=30', {
  //     status: 200,
  //     body: mockResponse,
  //   });
  //   await act(async () => {
  //     render(<MainPage />);
  //   });
  //   const inputElement = screen.getByRole('textbox');
  //   userEvent.type(inputElement, 'test input');
  //   await waitFor(() => {
  //     expect(inputElement).toHaveValue('test input');
  //   });
  // });
});
