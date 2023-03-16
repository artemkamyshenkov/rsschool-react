import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../app/components/ui/navBar/navBar';
import { MemoryRouter } from 'react-router-dom';

describe('NavBar', () => {
  it('renders the navigation links and the current page', () => {
    const location = { pathname: '/about' };
    render(
      <MemoryRouter initialEntries={['/about']}>
        <NavBar />
      </MemoryRouter>
    );

    const mainLink = screen.getByText('Main');
    const aboutLink = screen.getByText('About Us');
    const currentPage = screen.getByText('Current page: about');

    expect(mainLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(currentPage).toBeInTheDocument();
  });
});
