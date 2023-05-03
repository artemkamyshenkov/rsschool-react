import React from 'react';
import { ICreatedCard } from './createdCard.types';
import styles from './createdCard.module.css';
interface CreatedProductItemProps {
  item: ICreatedCard;
}

const CreatedProductItem = ({ item }: CreatedProductItemProps) => {
  return (
    <li className={styles.product__item} id={String(item.id)} data-testid="created-item">
      {<img className={styles.item__img} src={item.images} alt="Img" />}
      <p className={styles.item__name}>
        <span className={styles.item__field}>Name:</span> {item.name}
      </p>
      <p className={styles.item__name}>
        <span className={styles.item__field}>Date: </span>
        {item.date}
      </p>
      <p className={styles.item__name}>
        {' '}
        <span className={styles.item__field}>Category: </span>
        {item.category}
      </p>
      <p className={styles.item__name}>
        {' '}
        <span className={styles.item__field}>Price: </span>
        {item.price}€
      </p>
      <p className={styles.item__name}>
        {' '}
        <span className={styles.item__field}>Duration: </span>
        {item.publicDays} days
      </p>
      <p className={styles.item__name}>
        {' '}
        <span className={styles.item__field}>Agreement: </span> yes
      </p>
    </li>
  );
};

export default CreatedProductItem;
