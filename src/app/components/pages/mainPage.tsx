import React, { Component, ReactNode } from 'react';
import SearchInput from '../searchInput';
class MainPage extends Component {
  render(): ReactNode {
    return (
      <>
        <SearchInput />
        <h1>Main Page</h1>
      </>
    );
  }
}

export default MainPage;
