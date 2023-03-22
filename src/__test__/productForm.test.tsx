import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductForm from '../app/components/ui/forms/productForm';
import userEvent from '@testing-library/user-event';

describe('ProductForm component', () => {
  it('should render without crashing', () => {
    render(<ProductForm />);
  });

  it('should update productName in state when input value changes', async () => {
    render(<ProductForm />);
    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, 'test input');
    await waitFor(() => {
      expect(inputElement).toHaveValue('test input');
    });
  });
});
