import React from 'react';
import InputWithLabel from '../../../ui/molecules/inputWithLabel';
import styles from './createdForm.module.css';
const CreatedForm = () => {
  return (
    <div className={styles.form__container}>
      <h3 className="form__title">On this page you can add your product card</h3>
      <InputWithLabel type="text" className="" placeholder="Name"></InputWithLabel>
    </div>
  );
};

export default CreatedForm;
