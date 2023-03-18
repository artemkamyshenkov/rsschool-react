import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from '../app/components/ui/searchInput';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('Search input', () => {
  it('renders search input with placeholder', () => {
    render(<SearchInput value="" onChange={onChange} placeholder="Search..." />);

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('onChange works', async () => {
    render(<SearchInput value="" onChange={onChange} placeholder="Search" />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'React');

    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(5));
  });
});
