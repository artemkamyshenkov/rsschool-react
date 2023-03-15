import React, { Component, ReactNode } from 'react';
import SearchInput from '../ui/searchInput';
import Cards from '../ui/cards/cardsList';
class MainPage extends Component {
  render(): ReactNode {
    return (
      <>
        <div className="search__container">
          {' '}
          <SearchInput />
        </div>

        <div className="cards__container">
          <Cards />
        </div>
      </>
    );
  }
}

export default MainPage;
