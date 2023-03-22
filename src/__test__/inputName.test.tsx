import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputName from '../app/components/ui/forms/inputName';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('Text input', () => {
  it('renders search input with placeholder', () => {
    render(<InputName error="" onChange={onChange} />);
    expect(screen.getByPlaceholderText('Enter product name')).toBeInTheDocument();
  });

  it('onChange works', async () => {
    render(<InputName error="" onChange={onChange} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'React');
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(5));
  });

  it('renders an error message when the error prop is provided', () => {
    const { getByText } = render(<InputName error="Name is required" onChange={onChange} />);
    expect(getByText('Name is required')).toBeInTheDocument();
  });

  it('does not render an error message when the error prop is not provided', () => {
    const { queryByText } = render(<InputName error="" onChange={onChange} />);
    expect(queryByText('Name is required')).not.toBeInTheDocument();
  });
});
