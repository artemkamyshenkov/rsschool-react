import React, { Component, ReactNode } from 'react';
import { ICreatedCard } from './interface';

interface CreatedProductItemProps {
  item: ICreatedCard;
}

class CreatedProductItem extends Component<CreatedProductItemProps> {
  render(): ReactNode {
    const { item } = this.props;
    return (
      <li className="product__item" data-testid="card-item" id={String(item.id)}>
        {<img className="item__img" src={item.images} alt="Img" />}
        <p className="item__name">
          <span className="item__field">Name:</span> {item.title}
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
          {item.price}€
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
  }
}

export default CreatedProductItem;
