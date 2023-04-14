import React, { useState } from 'react';
import styles from './createdForm.module.css';
import { Button } from '../../../../ui/atoms/button';
import { useForm } from 'react-hook-form';
import InputWithLabel from '../../../../ui/molecules/inputWithLabel';
import CreatedProductList from '../createdCardList';
import { ICreatedForm } from './createdForm.types';
import SelectField from '../../../../ui/molecules/selectField';
import RadioField from '../../../../ui/molecules/radioField';
import {
  addCard,
  setName,
  setPrice,
  setCategory,
  setDate,
} from '../../../../../store/createdCard/createdCard.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';

const CreatedForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const {
    data: products,
    name,
    price,
    category,
    date,
  } = useSelector((state: RootState) => state.createdCard);
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
      name: data.name,
      price: data.price,
      images,
      isChecked: data.isChecked,
      category: data.select,
      date: data.date,
      publicDays: data.radio,
    };
    dispatch(addCard(card));
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__content}>
          <div className={styles.form__container}>
            <InputWithLabel
              type="text"
              placeholder="Enter product name"
              className={styles.input__form}
              register={register('name', {
                required: 'Field is required',
              })}
              error={errors?.name?.message?.toString()}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(setName(e.target.value));
              }}
              value={name}
            />
            <InputWithLabel
              type="number"
              placeholder="Enter product price"
              className={styles.input__form}
              register={register('price', {
                required: 'Field is required',
              })}
              error={errors?.price?.message?.toString()}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(setPrice(parseInt(e.target.value)));
              }}
              value={price}
            />
            <SelectField
              options={['Smartphone', 'Auto', 'TV', 'Jewelry', 'Other']}
              register={register('select', { required: 'Category is required' })}
              error={errors?.select?.message?.toString()}
              className={styles.input__select}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                dispatch(setCategory(e.target.value));
              }}
              defaultValue={category || ''}
            />
            <InputWithLabel
              type="date"
              className={styles.input__date}
              register={register('date', {
                required: 'Field is required',
              })}
              error={errors?.date?.message?.toString()}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(setDate(e.target.value));
              }}
              value={date}
            />

            <InputWithLabel
              type="file"
              accept="image/jpeg,image/png,image/gif"
              className={styles.input__file}
              register={register('images', { required: 'Choose a file' })}
              error={errors?.images?.message?.toString()}
            >
              Choose file
            </InputWithLabel>

            <RadioField
              options={[
                { name: '30 days', value: '30' },
                { name: '60 days', value: '60' },
                { name: '90 days', value: '90' },
              ]}
              register={register('radio', { required: 'Field is required' })}
              error={errors?.radio?.message?.toString()}
              className={styles.input__radio}
            />
            <InputWithLabel
              type="checkbox"
              register={register('isChecked', {
                required: 'Field is required',
              })}
              error={errors?.isChecked?.message?.toString()}
              className={styles.input__agree}
            >
              {' '}
              I agree with the posting rules
            </InputWithLabel>
            <Button className={styles.item__button}>Submit</Button>
            {isSubmit && <div>Form submitted</div>}
          </div>
        </div>
      </form>

      <CreatedProductList data={products} />
    </>
  );
};

export default CreatedForm;
