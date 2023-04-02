import React from 'react';
import { ICreatedCard } from '../../molecules/createdCard/createdCard.types';
import CreatedProductItem from '../../molecules/createdCard';

interface CreatedProductListProps {
  data: ICreatedCard[];
}

const CreatedProductList = ({ data }: CreatedProductListProps) => {
  return (
    <>
      <ul className="products__list" data-testid="createdProductList">
        {data.map((item) => (
          <CreatedProductItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default CreatedProductList;
