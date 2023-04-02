import React from 'react';
import { ICreatedCard } from './createdCard.types';

interface CreatedProductItemProps {
  item: ICreatedCard;
}

const CreatedProductItem = ({ item }: CreatedProductItemProps) => {
  return (
    <li className="product__item" id={String(item.id)} data-testid="created-item">
      {<img className="item__img" src={item.images} alt="Img" />}
      <p className="item__name">
        <span className="item__field">Name:</span> {item.productName}
      </p>
      <p className="item__name">
        <span className="item__field">Date: </span>
        {item.date}
      </p>
      <p className="item__name">
        {' '}
        <span className="item__field">Category: </span>
        {item.category}
      </p>
      <p className="item__name">
        {' '}
        <span className="item__field">Price: </span>
        {item.productPrice}€
      </p>
      <p className="item__name">
        {' '}
        <span className="item__field">Duration: </span>
        {item.publicDays} days
      </p>
      <p className="item__name">
        {' '}
        <span className="item__field">Agreement: </span> yes
      </p>
    </li>
  );
};

export default CreatedProductItem;
