import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from '../app/components/ui/cards/cardsList';
import * as React from 'react';

test('renders a list of CardItem components', async () => {
  const { getByTestId, getAllByTestId } = render(<Cards />);
  const productsList = getByTestId('products-list');
  expect(productsList).toBeInTheDocument();

  await waitFor(() => {
    const cardItems = getAllByTestId('card-item');
    expect(cardItems.length).toBeGreaterThan(0);
  });
});
