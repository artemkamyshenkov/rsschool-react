import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileUpload from '../app/components/ui/forms/inputFile';

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
