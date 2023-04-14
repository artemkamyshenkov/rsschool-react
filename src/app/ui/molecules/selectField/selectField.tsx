import React from 'react';
import { ISelectField } from './selectField.types';
import styles from './selectField.module.css';

const SelectField = ({
  options,
  error,
  className,
  register,
  onChange,
  defaultValue,
  ...rest
}: ISelectField) => {
  return (
    <div className={styles.input__container}>
      <select
        className={className}
        data-testid="productCategory-dropdown"
        {...register}
        {...rest}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <option disabled value="">
          {'Choose a category'}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default SelectField;
