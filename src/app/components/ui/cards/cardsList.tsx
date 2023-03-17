import React, { Component, ReactNode } from 'react';
import { ICardItem } from './interface';
import CardItem from './cardItem';
import './cards.css';
interface CardsListState {
  data: {
    products: ICardItem[];
  };
}

class Cards extends Component<{}, CardsListState> {
  state: CardsListState = {
    data: { products: [] },
  };
  componentDidMount() {
    fetch('https://dummyjson.com/products?limit=30')
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.error(error));
  }

  render(): ReactNode {
    const { data } = this.state;
    return (
      data && (
        <ul className="products__list" data-testid="cards">
          {data.products.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}
        </ul>
      )
    );
  }
}

export default Cards;
