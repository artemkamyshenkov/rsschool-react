import React from 'react';
import styles from './createdForm.module.css';
import Input from '../../../ui/atoms/input';
const CreatedForm = () => {
  return (
    <>
      <h3 className={styles.form__title}>On this page you can add your product card</h3>
      <form action="">
        <div className={styles.form__content}>
          <div className={styles.form__container}>
            <Input placeholder="Name" value="" className={styles.input__form} />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreatedForm;
