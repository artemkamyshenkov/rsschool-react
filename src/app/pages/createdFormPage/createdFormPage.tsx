import React from 'react';
import styles from './createdForm.module.css';
import CreatedForm from '../../features/items/organisms/createdForm/createdForm';
const CreatedFormPage = () => {
  return (
    <>
      <h3 className={styles.form__title}>On this page you can add your product card</h3>
      <CreatedForm />
    </>
  );
};

export default CreatedFormPage;
