import React, { useState } from 'react';
import Input from '../../../../ui/atoms/input';
import { Button } from '../../../../ui/atoms/button';
import { ISearchBar } from './searchBar.types';

const SearchBar = ({ value, onSubmit }: ISearchBar) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  //   onChange(event.target.value);
  // };

  const handleChangeSearchInput = (e: React.SyntheticEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Search" value={inputValue} onChange={handleChangeSearchInput} />
      <Button>Search</Button>
    </form>
  );
};

export default SearchBar;
