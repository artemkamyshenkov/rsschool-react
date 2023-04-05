import React, { useEffect, useState } from 'react';
import { ItemsList } from '../../features/items';
import SearchBar from '../../features/items/molecules/searchBar';
import styles from './mainPage.module.css';
import photoService from '../../services/photo.service';
import { Photo } from '../../features/items/molecules/itemCardMain/itemCardMain.types';

const MainPage: React.FC<object> = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    if (searchText !== '') {
      searchPhotos(searchText, page);
      setIsSearching(true);
    } else {
      loadPhotos(page);
      setIsSearching(false);
    }
  }, [searchText, page]);

  const loadPhotos = async (page: number) => {
    try {
      const data = await photoService.fetch(page);
      const photoData = data.map((photo: Photo) => photo);
      setImages(photoData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchPhotos = async (query: string, page: number) => {
    try {
      const { results } = await photoService.search(query, page);
      const photoData = results.map((photo: Photo) => photo);
      setImages(photoData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitSearchInput = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchText(inputValue);
    setInputValue('');
  };

  const handleChangeSearchInput = (e: React.SyntheticEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const handlePageChange = (newPage: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (isSearching) {
        setPage(newPage);
      } else {
        setPage(newPage);
      }
    }, 1000);
  };

  return (
    <>
      <SearchBar
        value={inputValue}
        onSubmit={handleSubmitSearchInput}
        onChange={handleChangeSearchInput}
      />

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
