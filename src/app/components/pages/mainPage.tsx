import React, { Component, ReactNode } from 'react';
import SearchInput from '../ui/searchInput';
import Cards from '../ui/cards/cardsList';

interface MainPageState {
  inputText: string;
  data: { products: [] };
  isLoading: boolean;
}

class MainPage extends Component<object, MainPageState> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputText: localStorage.getItem('searchInputValue') || '',
      data: { products: [] },
      isLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: string) {
    this.setState({
      inputText: value,
    });
  }

  componentDidMount() {
    fetch('https://dummyjson.com/products?limit=30')
      .then((response: Response) => response.json())
      .then((data) => this.setState({ data, isLoading: false }))
      .catch((error) => console.error(error));
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
          <Cards data={this.state.data} isLoading={this.state.isLoading} />
        </div>
      </>
    );
  }
}

export default MainPage;
