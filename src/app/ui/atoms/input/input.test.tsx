import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputText from './input';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('Search input', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('renders search input with placeholder', () => {
    render(<InputText className="" placeholder="Search..." onChange={() => {}} value="" />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('onChange works', async () => {
    render(<InputText value="" onChange={onChange} placeholder="Search" className="" />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'React');
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(5));
  });
});
