import React, { useEffect, useState } from 'react';
import { ItemsList } from '../../../features/items';
import { InputText } from '../../../ui/atoms/inputText';
import styles from './mainPage.module.css';

const MainPage: React.FC<object> = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState<string>(
    localStorage.getItem('searchInputValue') || ''
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleChange = (value: string) => {
    setInputText(value);
  };

  useEffect(() => {
    localStorage.setItem('searchInputValue', inputText);
  }, [inputText]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=30')
      .then((response: Response) => response.json())
      .then((data) => {
        setItems(data.products);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={styles.search__container}>
        <InputText
          className={styles.search__input}
          placeholder="Search"
          onChange={handleChange}
          value={inputText}
        />
      </div>

      <ItemsList data={items} isLoading={isLoading} className={styles.products__list} />
    </>
  );
};

export default MainPage;
