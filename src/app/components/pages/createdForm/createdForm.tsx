import React, { useState } from 'react';
import styles from './createdForm.module.css';
import { Button } from '../../../ui/atoms/button';
import { useForm } from 'react-hook-form';
import InputWithLabel from '../../../ui/molecules/inputWithLabel';
import CreatedProductList from '../../../features/items/organisms/createdCardList';
import { ICreatedCard } from '../../../features/items/molecules/createdCard/createdCard.types';

const CreatedForm = () => {
  const [products, setProducts] = useState<ICreatedCard[]>([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICreatedCard>({ reValidateMode: 'onSubmit' });

  const onSubmit = (data: ICreatedCard) => {
    setProducts([...products, data]);
    reset();
  };

  return (
    <>
      <h3 className={styles.form__title}>On this page you can add your product card</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__content}>
          <div className={styles.form__container}>
            <InputWithLabel
              type="text"
              placeholder="Enter product name"
              className={styles.input__form}
              register={register('productName', {
                required: 'Field is required',
              })}
              error={errors?.productName?.message?.toString()}
            />
            <InputWithLabel
              type="number"
              placeholder="Enter product price"
              className={styles.input__form}
              register={register('productPrice', {
                required: 'Field is required',
              })}
              error={errors?.productPrice?.message?.toString()}
            />

            <Button className={styles.item__button}>Submit</Button>
          </div>
        </div>
      </form>

      <CreatedProductList data={products} />
    </>
  );
};

export default CreatedForm;
