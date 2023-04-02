import React from 'react';
import { ISelectField } from './selectField.types';

const SelectField = ({ options, error, className, register, ...rest }: ISelectField) => {
  return (
    <div className="input__container">
      <select
        className={'selected__field'}
        data-testid="productCategory-dropdown"
        {...register}
        {...rest}
        defaultValue=""
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default SelectField;
