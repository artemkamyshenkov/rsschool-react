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
});
