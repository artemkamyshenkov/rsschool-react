import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectField from './selectField';

describe('RadioField', () => {
  const options = ['Smartphone', 'Auto', 'TV', 'Jewelry', 'Other'];

  it('renders the label and options correctly', () => {
    render(<SelectField options={options} />);
    const selectField = screen.getByTestId('productCategory-dropdown');
    expect(selectField.children.length).toBe(options.length + 1);
  });

  it('should display error message when there is an error', () => {
    const error = 'Category is required';
    render(<SelectField options={options} error={error} />);
    const errorMessage = screen.getByText(error);
    expect(errorMessage).toBeInTheDocument();
  });
});
