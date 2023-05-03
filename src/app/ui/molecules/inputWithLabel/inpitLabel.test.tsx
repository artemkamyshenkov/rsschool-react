import React from 'react';
import { render, screen } from '@testing-library/react';
import InputWithLabel from './inputWithLabel';
import '@testing-library/jest-dom';

describe('InputWithLabel', () => {
  it('renders the label and input correctly', () => {
    render(
      <InputWithLabel type="text" placeholder="Enter your name">
        Name:
      </InputWithLabel>
    );

    const labelElement = screen.getByText('Name:');
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Enter your name');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('displays the error message when passed an error prop', () => {
    render(
      <InputWithLabel type="text" placeholder="Enter your email" error="Please enter a valid email">
        Email:
      </InputWithLabel>
    );

    const errorMessage = screen.getByText('Please enter a valid email');
    expect(errorMessage).toBeInTheDocument();
  });
});
