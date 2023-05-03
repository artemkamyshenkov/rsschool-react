import React from 'react';
import Label from '../../atoms/label/index';
import InputWithLabelProps from './inputWithLabel.types';
import styles from './inputWithLabel.module.css';

const InputWithLabel = ({
  children,
  type,
  className,
  register,
  placeholder,
  error,
  checked,
  ...rest
}: InputWithLabelProps) => {
  return (
    <Label className={styles.label}>
      {children}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        checked={checked}
        {...rest}
        {...register}
      />
      {error && <p className={styles.error}>{error}</p>}
    </Label>
  );
};

export default InputWithLabel;
