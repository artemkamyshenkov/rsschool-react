import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from './aboutUs';

describe('NavBar', () => {
  it('renders the navigation links and the current page', () => {
    render(<AboutUs />);

    const gitLink = screen.getByText('GitHub');
    const rsLink = screen.getByText('RS School');
    const yearLink = screen.getByText('2023');

    expect(gitLink).toBeInTheDocument();
    expect(rsLink).toBeInTheDocument();
    expect(yearLink).toBeInTheDocument();
  });
});
