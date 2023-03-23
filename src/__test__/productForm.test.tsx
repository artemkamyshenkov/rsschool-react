import React from 'react';
import { render, screen, waitFor, fireEvent, getByTestId } from '@testing-library/react';
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

  it('should submit form when button is clicked', async () => {
    const { getByText, getByTestId } = render(<ProductForm />);
    const submitButton = getByText('Submit');
    const productNameInput = getByTestId('productName-input');
    const productPriceInput = getByTestId('productPrice-input');
    const productCategoryDropdown = getByTestId('productCategory-dropdown');
    const productDateInput = getByTestId('productDate-input');
    const productImgInput = getByTestId('productImg-input');
    const checkboxField = getByTestId('isChecked-checkbox');

    fireEvent.change(productNameInput, { target: { value: 'New Product Name' } });
    fireEvent.change(productPriceInput, { target: { value: '50' } });
    fireEvent.change(productCategoryDropdown, { target: { value: 'Category' } });
    fireEvent.change(productDateInput, { target: { value: '2022-01-01' } });
    fireEvent.change(productImgInput, { target: { value: '' } });
    fireEvent.click(checkboxField);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByTestId('createdProductList')).toBeInTheDocument();
    });
  });

  it('should display error message when input value is invalid', async () => {
    const { getByTestId, getByText } = render(<ProductForm />);
    const input = getByTestId('productName-input');
    fireEvent.change(input, { target: { value: 'A' } });
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    const errorMessage = getByText('Product name must be at least 3 characters');
    await waitFor(() => {
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('should display error message when input number value is invalid', async () => {
    const { getByTestId, getByText } = render(<ProductForm />);
    const inputName = getByTestId('productName-input');
    fireEvent.change(inputName, { target: { value: 'Test' } });
    const input = getByTestId('productPrice-input');
    fireEvent.change(input, { target: { value: '-1' } });
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    const errorMessage = getByText('Price must be greater than 0');
    await waitFor(() => {
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
