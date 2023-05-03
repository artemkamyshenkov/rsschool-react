import React from 'react';
import Input from '../../../../ui/atoms/input';
import { Button } from '../../../../ui/atoms/button';
import { ISearchBar } from './searchBar.types';
import styles from './searchBar.module.css';
const SearchBar = ({ value, onSubmit, onChange }: ISearchBar) => {
  return (
    <form onSubmit={onSubmit} className={styles.search__form} data-testid="search-bar">
      <Input
        placeholder="Search photo (auto, ocean, summer, ext.)"
        value={value}
        onChange={onChange}
        className={styles.search__input}
      />
      <Button className={styles.btn__search}>Search</Button>
    </form>
  );
};

export default SearchBar;
