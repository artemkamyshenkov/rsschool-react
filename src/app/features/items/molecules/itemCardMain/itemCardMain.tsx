import React from 'react';
import styles from './itemCardMain.module.css';
import { ICardMain } from './itemCardMain.types';

const ItemCardMain = ({ item, onOpenModal }: ICardMain) => {
  return (
    <li className={styles.product__item}>
      <img
        src={item.urls.small}
        alt="Photo"
        className={styles.item__img}
        onClick={() => onOpenModal(item.id)}
      />
      <div className={styles.product__hover}></div>
    </li>
  );
};

export default ItemCardMain;
