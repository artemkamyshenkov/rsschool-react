import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioField from '../app/components/ui/forms/radioField';

describe('RadioField', () => {
  const props = {
    publicDays: '30',
    onChange: jest.fn(),
    error: '',
  };

  it('renders the component', () => {
    const { getByTestId } = render(
      <RadioField publicDays={props.publicDays} onChange={props.onChange} error={props.error} />
    );
    const component = getByTestId('publicDays-radio');
    expect(component).toBeInTheDocument();
  });

  it('renders radio options', () => {
    const { getByLabelText } = render(
      <RadioField publicDays={props.publicDays} onChange={props.onChange} error={props.error} />
    );
    expect(getByLabelText('30 days')).toBeInTheDocument();
    expect(getByLabelText('60 days')).toBeInTheDocument();
    expect(getByLabelText('90 days')).toBeInTheDocument();
  });

  it('calls onChange function when a radio option is selected', () => {
    const mockHandleChange = jest.fn();
    const { getByLabelText } = render(
      <RadioField publicDays={props.publicDays} onChange={mockHandleChange} error={props.error} />
    );
    fireEvent.click(getByLabelText('60 days'), { target: { value: '60' } });
    expect(mockHandleChange).toHaveBeenCalledWith('publicDays', '60');
  });
});
