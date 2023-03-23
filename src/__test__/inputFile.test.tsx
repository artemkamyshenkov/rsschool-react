import React, { ChangeEvent } from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileUpload from '../app/components/ui/forms/inputFile';
import userEvent from '@testing-library/user-event';

describe('FileUpload component', () => {
  it('renders the component', () => {
    const { getByLabelText } = render(<FileUpload onChange={jest.fn()} error="" />);
    const input = getByLabelText('Add product photo');
    expect(input).toBeInTheDocument();
  });

  it('renders error message if there is an error', () => {
    const error = 'Error message';
    const { getByText } = render(<FileUpload onChange={jest.fn()} error={error} />);
    expect(getByText(error)).toBeInTheDocument();
  });
});
