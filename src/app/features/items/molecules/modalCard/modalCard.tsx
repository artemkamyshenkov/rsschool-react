import React from 'react';
import { ICardModal } from './modalCard.types';
import styles from './modalCard.module.css';
const ModalCard = ({ item, onCloseModal, showModal, onBackdropModal }: ICardModal) => {
  const getDate = (date: string) => {
    const dateStr = new Date(date);
    const year = dateStr.getFullYear();
    const month = ('0' + (dateStr.getMonth() + 1)).slice(-2);
    const day = ('0' + dateStr.getDate()).slice(-2);
    const dateWithoutTime = `${year}-${month}-${day}`;
    return dateWithoutTime;
  };
  return (
    <div className={`${styles.modal} ${showModal ? styles.open : ''}`}>
      <div className={styles.modal__container} onClick={onBackdropModal}>
        <div className={styles.modal__body}>
          <span className={styles.modal__close} onClick={onCloseModal}></span>
          <img
            src={item?.urls.regular}
            alt={item?.alt_description || ''}
            className={styles.modal__img}
          />
          <div className={styles.modal__info}>
            <p>
              <strong>Author:</strong> {item?.user.name}
            </p>
            <p>
              {' '}
              <strong>Description</strong>: {item?.description || item?.alt_description}
            </p>
            <p>
              <strong>Likes:</strong> {item?.likes}
            </p>
            <p>
              <strong> Created:</strong> {getDate(item?.created_at as string)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
