import React, { memo, useState } from 'react';
import ICardsList from './items-list.types';
import ItemCardMain from '../../molecules/itemCardMain/itemCardMain';
import styles from './items-list.module.css';
import { Photo } from '../../molecules/itemCardMain/itemCardMain.types';
import ModalCard from '../../molecules/modalCard';

const ItemsList = memo(({ data, isLoading, className, page, onPageChange }: ICardsList) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [openFoto, setOpenFoto] = useState<Photo>();
  const handleOpenModal = (id: string) => {
    const item = data.find((item) => item.id === id);
    setOpenFoto(item);
    setShowModal(true);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

  if (data.length === 0) {
    return (
      <h3 className={styles.not_found__block}>
        Sorry, no results were found for your search, please be a little more specific.
      </h3>
    );
  }
  return (
    <>
      {isLoading && (
        <div className={styles.loader__container} data-testid="loader">
          <div className={styles.wobblebar__loader}></div>
        </div>
      )}
      {!isLoading && (
        <>
          {' '}
          <ul className={className} data-testid="items-list">
            {data.map((item) => (
              <ItemCardMain item={item} key={item.id} onOpenModal={handleOpenModal} />
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
      )}
      <ModalCard
        item={openFoto}
        onCloseModal={handleCloseModal}
        showModal={showModal}
        onBackdropModal={handleBackdropClick}
      />
    </>
  );
});

export default ItemsList;
