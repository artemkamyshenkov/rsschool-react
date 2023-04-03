import React, { useEffect, useState } from 'react';
import { ItemsList } from '../../features/items';
import Input from '../../ui/atoms/input';
import SearchBar from '../../features/items/molecules/searchBar';
import styles from './mainPage.module.css';
import photoService from '../../services/photo.service';
interface Photo {
  urls: {
    regular: string;
  };
}

const MainPage: React.FC<object> = () => {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState<string>(
    localStorage.getItem('searchInputValue') || ''
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem('searchInputValue', searchText);
  }, [searchText]);

  useEffect(() => {
    loadPhotos(page);
  }, [page]);

  const loadPhotos = async (page: number) => {
    try {
      const data = await photoService.fetch(page);
      const photoData = data.map((photo: Photo) => photo.urls.regular);
      setImages(photoData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInput = (query: string | number) => {
    // setSearchText((e.target as HTMLInputElement).value);
    console.log(query);
  };

  const handlePageChange = (newPage: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPage(newPage);
    }, 1000);
  };

  return (
    <>
      <div className={styles.search__container}>
        {/* <Input
          className={styles.search__input}
          placeholder="Search"
          onChange={handleChangeSearchInput}
          value={searchText}
        /> */}
        <SearchBar value={searchText} onSubmit={handleSearchInput} />
      </div>

      <ItemsList
        data={images}
        isLoading={isLoading}
        className={styles.products__list}
        page={page}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MainPage;
