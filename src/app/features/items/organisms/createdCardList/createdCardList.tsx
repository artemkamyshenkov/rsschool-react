import React from 'react';
import { ICreatedCard } from '../../molecules/createdCard/createdCard.types';
import CreatedProductItem from '../../molecules/createdCard';
import styles from './createdCardList.module.css';
interface CreatedProductListProps {
  data: ICreatedCard[];
}

const CreatedProductList = ({ data }: CreatedProductListProps) => {
  return (
    <ul className={styles.products__list} data-testid="createdProductList">
      {data.map((item) => (
        <CreatedProductItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CreatedProductList;
