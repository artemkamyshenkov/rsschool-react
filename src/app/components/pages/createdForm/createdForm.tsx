import React, { useState } from 'react';
import styles from './createdForm.module.css';
import Input from '../../../ui/atoms/input';
import { Button } from '../../../ui/atoms/button';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
const CreatedForm = () => {
  const [data, setData] = useState({ name: '', price: '' });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleChange = (e: React.SyntheticEvent, fieldName: string) => {
    setData((prevState) => ({
      ...prevState,
      [fieldName]: (e.target as HTMLInputElement).value,
    }));
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h3 className={styles.form__title}>On this page you can add your product card</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__content}>
          <div className={styles.form__container}>
            <Input
              placeholder="Enter product name"
              value={data.name || ''}
              className={styles.input__form}
              onChange={(e) => handleChange(e, 'name')}
            />
            <Input
              placeholder="Enter product price (in euro)"
              value={data.price || ''}
              className={styles.input__form}
              type="number"
              onChange={(e) => handleChange(e, 'price')}
            />
            <Button className={styles.item__button}>Submit</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreatedForm;
