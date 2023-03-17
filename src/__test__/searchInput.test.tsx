import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from '../app/components/ui/searchInput';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('Search input', () => {
  it('renders search input with placeholder', () => {
    render(<SearchInput />);

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    screen.debug();
  });
  it('onChange works', () => {
    render(<SearchInput />);

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
