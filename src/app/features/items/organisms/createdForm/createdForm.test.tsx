import CreatedForm from './createdForm';
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../../../store/store';
import { setName, setPrice } from '../../../../../store/createdCard/createdCardSlice';

describe('Cards component', () => {
  it('renders CreatedForm component', () => {
    render(
      <Provider store={store}>
        <CreatedForm />
      </Provider>
    );
  });

  it('displays form inputs', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Provider store={store}>
        <CreatedForm />
      </Provider>
    );

    expect(getByPlaceholderText('Enter product name')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter product price')).toBeInTheDocument();
    expect(getByLabelText('Choose file')).toBeInTheDocument();
    expect(getByLabelText('30 days')).toBeInTheDocument();
    expect(getByLabelText('I agree with the posting rules')).toBeInTheDocument();
  });

  it('should change input value when user types', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <CreatedForm />
      </Provider>
    );
    const input = getByPlaceholderText('Enter product name') as HTMLInputElement;
    act(() => {
      store.dispatch(setName('New product name'));
    });
    fireEvent.change(input, { target: { value: 'New product name' } });
    expect(input.value).toBe(store.getState().createdCard.name);
    expect(store.getState().createdCard.name).toBe('New product name');
  });

  it('should change price value when user types', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <CreatedForm />
      </Provider>
    );
    const input = getByPlaceholderText('Enter product price') as HTMLInputElement;
    act(() => {
      store.dispatch(setPrice(100));
    });
    fireEvent.change(input, { target: { value: 100 } });
    expect(Number(input.value)).toBe(store.getState().createdCard.price);
    expect(store.getState().createdCard.price).toBe(100);
  });
});
