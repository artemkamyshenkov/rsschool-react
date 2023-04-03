import React from 'react';
import ICardsList from './items-list.types';
import ItemCardMain from '../../molecules/itemCardMain/itemCardMain';
import styles from './items-list.module.css';

const ItemsList = ({ data, isLoading, className, page, onPageChange }: ICardsList) => {
  const handlePrev = () => {
    if (page !== undefined) {
      onPageChange(page - 1);
    }
  };

  const handleNext = () => {
    if (page !== undefined) {
      onPageChange(page + 1);
    }
  };

  return (
    <>
      {isLoading && (
        <div className={styles.loader__container}>
          <div className={styles.wobblebar__loader}>Loading...</div>
        </div>
      )}
      <ul className={className} data-testid="cards">
        {data.map((url) => (
          <ItemCardMain url={url} key={url} />
        ))}
      </ul>
      <div className={styles.btn__pagination_container}>
        <button onClick={handlePrev} disabled={page === 1} className={styles.btn__pagination}>
          Prev
        </button>
        <button onClick={handleNext} className={styles.btn__pagination}>
          Next
        </button>
      </div>
    </>
  );
};

export default ItemsList;
