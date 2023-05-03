import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import MainPage from './mainPage';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../store/store';
describe('MainPage', () => {
  test('MainPage renders correctly', async () => {
    act(() => {
      render(
        <Provider store={store}>
          <MainPage />
        </Provider>
      );
    });
    const mainPageElement = screen.getByTestId('main-page');
    const searchBar = screen.getByTestId('search-bar');
    expect(mainPageElement).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    await waitFor(() => {
      setTimeout(() => {
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(15);
      }, 3000);
    });
  });

  it('typing in Search works', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MainPage />
        </Provider>
      );
    });
    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, 'test input');
    await waitFor(() => {
      expect(inputElement).toHaveValue('test input');
    });
  });
});
