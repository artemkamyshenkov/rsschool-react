import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreatedFormPage from './createdFormPage';
import store from '../../../store/store';
import { Provider } from 'react-redux';

describe('Created form page', () => {
  it('Component shoul render whitout errors', () => {
    render(
      <Provider store={store}>
        <CreatedFormPage />
      </Provider>
    );
    const title = screen.getByText(/On this page you can add your product card/i);
    expect(title).toBeInTheDocument();
  });
});
