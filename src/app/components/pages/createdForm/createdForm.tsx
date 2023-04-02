import React, { useState } from 'react';
import styles from './createdForm.module.css';
import { Button } from '../../../ui/atoms/button';
import { useForm } from 'react-hook-form';
import InputWithLabel from '../../../ui/molecules/inputWithLabel';
import CreatedProductList from '../../../features/items/organisms/createdCardList';
import { ICreatedCard } from '../../../features/items/molecules/createdCard/createdCard.types';
import { ICreatedForm } from './createdForm.types';

const CreatedForm = () => {
  const [products, setProducts] = useState<ICreatedCard[]>([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICreatedForm>({ reValidateMode: 'onSubmit' });

  const onSubmit = (data: ICreatedForm) => {
    const files = data.images;
    const file = data.images ? files![0] : null;
    const images = file ? URL.createObjectURL(file) : '';
    const card = {
      id: Date.now(),
      name: data.productName,
      price: data.productPrice,
      images,
    };
    setProducts([...products, card]);
    console.log(card);
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

            <InputWithLabel
              type="file"
              accept="image/jpeg,image/png,image/gif"
              className={styles.input__form}
              register={register('images', { required: 'Choose a file' })}
              error={errors?.images?.message?.toString()}
            >
              File
            </InputWithLabel>

            <Button className={styles.item__button}>Submit</Button>
          </div>
        </div>
      </form>

      <CreatedProductList data={products} />
    </>
  );
};

export default CreatedForm;
