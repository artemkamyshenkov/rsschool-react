import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputText from './inputText';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('Search input', () => {
  afterEach(() => {
    localStorage.clear();
  });

  // it('saves input value to local storage on component unmount', () => {
  //   const { getByTestId, rerender } = render(
  //     <InputText value="" onChange={() => {}} placeholder="" />
  //   );
  //   const searchInput = getByTestId('search-input');

  //   fireEvent.change(searchInput, { target: { value: 'new value' } });
  //   expect(localStorage.getItem('searchInputValue')).toBeNull();

  //   rerender(<InputText value="new value" onChange={() => {}} placeholder="" />);
  //   expect(localStorage.getItem('searchInputValue')).toBeNull();

  //   fireEvent(window, new Event('beforeunload'));
  //   expect(localStorage.getItem('searchInputValue')).toBe('new value');
  // });

  it('renders search input with placeholder', () => {
    render(<InputText className="" placeholder="Search..." />);

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  // it('onChange works', async () => {
  //   render(<InputText value="" onChange={onChange} placeholder="Search" />);

  //   const input = screen.getByRole('textbox');
  //   userEvent.type(input, 'React');

  //   await waitFor(() => expect(onChange).toHaveBeenCalledTimes(5));
  // });
});
