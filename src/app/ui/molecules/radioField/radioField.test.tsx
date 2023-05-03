import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioField from './radioField';
import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('RadioField component', () => {
  const options = [
    { name: '1 day', value: '1' },
    { name: '3 days', value: '3' },
    { name: '7 days', value: '7' },
  ];

  it('renders the label and options correctly', () => {
    render(
      <Provider store={store}>
        <RadioField options={options} />
      </Provider>
    );

    const labelElement = screen.getByText('Choose how many days you want to publish the product?');
    expect(labelElement).toBeInTheDocument();

    options.forEach((option) => {
      const optionElement = screen.getByLabelText(option.name);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute('value', option.value);
    });
  });

  it('updates the selected value correctly', () => {
    render(
      <Provider store={store}>
        <RadioField options={options} />
      </Provider>
    );
    const secondOption = screen.getByLabelText('3 days');
    expect(secondOption).not.toBeChecked();
    act(() => {
      secondOption.click();
    });
    expect(secondOption).toBeChecked();
    const { createdCard } = store.getState();
    expect(createdCard.publicDays).toBe('3');
  });
  it('displays the error message when passed an error prop', () => {
    render(
      <Provider store={store}>
        <RadioField options={options} error="Please select a duration" />
      </Provider>
    );
    const errorMessage = screen.getByText('Please select a duration');
    expect(errorMessage).toBeInTheDocument();
  });
});
