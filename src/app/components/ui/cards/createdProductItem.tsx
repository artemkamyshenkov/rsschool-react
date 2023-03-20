import React, { Component, ReactNode, MouseEvent } from 'react';
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
        <p className="item__name">{item.title}</p>
        <p className="item__name">{item.date}</p>
        <p className="item__category">Category: {item.category}</p>
        <p className="item__price">Price: {item.price}€</p>
        <p className="item__field">Duration: {item.publicDays} days</p>
        <p className="item__field">Agreement: yes</p>
      </li>
    );
  }
}

export default CreatedProductItem;
