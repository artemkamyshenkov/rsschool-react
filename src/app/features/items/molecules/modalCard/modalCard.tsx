import React from 'react';
import { ICardModal } from './modalCard.types';
import styles from './modalCard.module.css';
import { format } from 'date-fns';

const ModalCard = ({ item, onCloseModal, showModal, onBackdropModal }: ICardModal) => {
  const getDate = (date: string) => {
    if (date) {
      const formattedDate = format(new Date(date), 'yyyy-MM-dd');
      return formattedDate;
    }
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
