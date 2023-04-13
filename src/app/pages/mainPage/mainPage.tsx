import React, { useEffect, useState } from 'react';
import { ItemsList } from '../../features/items';
import SearchBar from '../../features/items/molecules/searchBar';
import styles from './mainPage.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadPhotos,
  searchPhotos,
  setIsSearching,
  setPage,
  setSearchText,
} from '../../../store/photos/photosSlice';
import { AppDispatch, RootState } from '../../../store/store';
const MainPage: React.FC<object> = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const images = useSelector((state: RootState) => state.photo.images);
  const isLoading = useSelector((state: RootState) => state.photo.isLoading);
  console.log(images);
  useEffect(() => {
    if (searchText !== '') {
      dispatch(searchPhotos({ query: searchText, page }));
    } else {
      dispatch(loadPhotos(page));
    }
  }, [dispatch, searchText, page]);

  const handleSubmitSearchInput = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchText(inputValue);
    setInputValue('');
  };

  const handleChangeSearchInput = (e: React.SyntheticEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const handlePageChange = (newPage: number) => {
    setTimeout(() => {
      if (isSearching) {
        setPage(newPage);
      } else {
        setPage(newPage);
      }
    }, 1000);
  };

  return (
    <div data-testid="main-page">
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
    </div>
  );
};

export default MainPage;
