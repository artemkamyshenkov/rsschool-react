import CreatedForm from './createdForm';
import React from 'react';
import { render, screen, waitFor, fireEvent, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Cards component', () => {
  it('renders CreatedForm component', () => {
    render(<CreatedForm />);
  });

  it('displays form inputs', () => {
    const { getByPlaceholderText, getByLabelText } = render(<CreatedForm />);

    expect(getByPlaceholderText('Enter product name')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter product price')).toBeInTheDocument();
    expect(getByLabelText('Choose file')).toBeInTheDocument();
    expect(getByLabelText('30 days')).toBeInTheDocument();
    expect(getByLabelText('I agree with the posting rules')).toBeInTheDocument();
  });

  it('should change input value when user types', () => {
    const { getByPlaceholderText } = render(<CreatedForm />);
    const input = getByPlaceholderText('Enter product name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New product name' } });
    expect(input.value).toBe('New product name');
  });
});
