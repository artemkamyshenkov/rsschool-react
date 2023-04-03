import React from 'react';
import styles from './itemCardMain.module.css';
interface ICardMain {
  url: string;
}
const ItemCardMain = ({ url }: ICardMain) => {
  return (
    <li className={styles.product__item}>
      <img src={url} alt="Photo" className={styles.item__img} />
    </li>
  );
};

export default ItemCardMain;
