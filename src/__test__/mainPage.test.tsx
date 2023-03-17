import React from 'react';
import { render } from '@testing-library/react';
import MainPage from '../app/components/pages/mainPage';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

describe('MainPage component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('renders SearchInput and Cards components', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));
    const { getByTestId } = render(<MainPage />);
    expect(getByTestId('search-input')).toBeInTheDocument();
    expect(getByTestId('cards')).toBeInTheDocument();
  });
});
