import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioField from './radioField';

describe('RadioField', () => {
  const options = [
    { name: '30 days', value: '30' },
    { name: '60 days', value: '60' },
    { name: '90 days', value: '90' },
  ];

  it('renders the label and options correctly', () => {
    render(<RadioField options={options} />);

    const labelElement = screen.getByText('Choose how many days you want to publish the product?');
    expect(labelElement).toBeInTheDocument();

    options.forEach((option) => {
      const radioElement = screen.getByLabelText(option.name);
      expect(radioElement).toBeInTheDocument();
      expect(radioElement).toHaveAttribute('type', 'radio');
      expect(radioElement).toHaveAttribute('value', option.value);
    });
  });
  it('displays the error message when passed an error prop', () => {
    render(<RadioField options={options} error="Please select a duration" />);

    const errorMessage = screen.getByText('Please select a duration');
    expect(errorMessage).toBeInTheDocument();
  });
});
