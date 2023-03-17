import React, { Component, ReactNode, ChangeEvent } from 'react';
import SearchInput from '../ui/searchInput';
import Cards from '../ui/cards/cardsList';
class MainPage extends Component<object, { inputText: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputText: localStorage.getItem('searchInputValue') || '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: string) {
    this.setState({
      inputText: value,
    });
    console.log(value);
  }

  render(): ReactNode {
    return (
      <>
        <div className="search__container">
          {' '}
          <SearchInput
            value={this.state.inputText}
            onChange={this.handleChange}
            placeholder="Search"
          />
        </div>

        <div className="cards__container">
          <Cards />
        </div>
      </>
    );
  }
}

export default MainPage;
