import React, { useEffect, useState } from 'react';
import { ItemsList } from '../../../features/items';
import Input from '../../../ui/atoms/input';
import styles from './mainPage.module.css';

const MainPage: React.FC<object> = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState<string>(
    localStorage.getItem('searchInputValue') || ''
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const handleChangeSearchInput = (e: React.SyntheticEvent) => {
    setInputText((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <div className={styles.search__container}>
        <Input
          className={styles.search__input}
          placeholder="Search"
          onChange={handleChangeSearchInput}
          value={inputText}
        />
      </div>

      <ItemsList data={items} isLoading={isLoading} className={styles.products__list} />
    </>
  );
};

export default MainPage;
