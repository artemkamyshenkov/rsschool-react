import React from 'react';
import ICardsList from './items-list.types';
import { ItemCard } from '../../molecules';

const ItemsList = ({ data, isLoading, className }: ICardsList) => {
  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ul className={className} data-testid="cards">
        {data.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default ItemsList;
