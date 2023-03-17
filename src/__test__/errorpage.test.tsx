import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from '../app/components/pages/errorPage';

describe('NavBar', () => {
  it('renders the navigation links and the current page', () => {
    render(<ErrorPage />);

    const errorTitle = screen.getByText('404');
    const errorText = screen.getByText('Page not found');

    expect(errorTitle).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });
});
