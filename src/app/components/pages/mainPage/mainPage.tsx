import React, { Component, ReactNode } from 'react';
import { ItemsList } from '../../../features/items';
import { InputText } from '../../../ui/atoms/inputText';
import styles from './mainPage.module.css';

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
        <div className={styles.search__container}>
          <InputText className={styles.search__input} placeholder="Search" />
          {/* <SearchInput
            value={this.state.inputText}
            onChange={this.handleChange}
            placeholder="Search"
          /> */}
        </div>

        <ItemsList
          data={this.state.data}
          isLoading={this.state.isLoading}
          className={styles.products__list}
        />
      </>
    );
  }
}

export default MainPage;
