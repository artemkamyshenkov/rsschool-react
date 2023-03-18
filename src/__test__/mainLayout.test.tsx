import React from 'react';
import { render } from '@testing-library/react';
import MainLayout from '../app/layouts/main';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('MainLayout', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    );
    expect(getByTestId('wrapper')).toBeInTheDocument();
  });
});
