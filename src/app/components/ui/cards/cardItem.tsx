import React, { Component, ReactNode } from 'react';
import { ICardItem } from './interface';

interface CardItemProps {
  item: ICardItem;
}

class CardItem extends Component<CardItemProps> {
  render(): ReactNode {
    const { item } = this.props;
    return (
      <li className="product__item" data-testid="card-item">
        {<img className="item__img" src={item.images[0]} alt="Img" />}
        <p className="item__name">{item.title}</p>
        <p className="item__category">Category: {item.category}</p>
        <p className="item__brand">Brand: {item.brand}</p>
        <p className="item__price">Price: {item.price}€</p>
        <p className="item__stock">Stock: {item.stock}</p>
        <button className="item__button">Add to cart</button>
      </li>
    );
  }
}

export default CardItem;
