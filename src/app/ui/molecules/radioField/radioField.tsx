import React from 'react';
import { IRadioField } from './radioField.types';
import Label from '../../atoms/label';
import styles from './radioField.module.css';
const RadioField = ({ options, error, register, className }: IRadioField) => {
  return (
    <Label data-testid="publicDays-radio" className={styles.label}>
      <p>Choose how many days you want to publish the product?</p>
      {options &&
        options.map((option) => (
          <div key={option.name + '_' + option.value} className={styles.radio__container}>
            {' '}
            <input
              type="radio"
              id={option.name + '_' + option.value}
              value={option.value}
              name="radio-day"
              className={className}
              {...register}
            />
            <label htmlFor={option.name + '_' + option.value}>{option.name}</label>
          </div>
        ))}
      {error && <p className={styles.error}>{error}</p>}
    </Label>
  );
};

export default RadioField;
