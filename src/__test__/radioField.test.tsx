import React from 'react';
import { render, screen, waitFor, fireEvent, queryAllByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioField from '../app/components/ui/forms/radioField';
import userEvent from '@testing-library/user-event';

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
