import React from 'react';
import { ICardItemProps } from './item-card.types';
import styles from './item-card.module.css';
import { Button } from '../../../../ui/atoms/button';
const ItemCard = ({ item }: ICardItemProps) => {
  return (
    <li className={styles.product__item} data-testid="card-item">
      {<img className={styles.item__img} src={item.images[0]} alt="Img" />}
      <p className={styles.item__name}>{item.title}</p>
      <p className={styles.item__category}>Category: {item.category}</p>
      <p className={styles.item__brand}>Brand: {item.brand}</p>
      <p className={styles.item__price}>Price: {item.price}€</p>
      <p className={styles.item__stock}>Stock: {item.stock}</p>
      <Button className={styles.item__button}>Add to cart</Button>
    </li>
  );
};

export default ItemCard;
