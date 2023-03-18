import React, { Component, ReactNode } from 'react';
import { ICardItem } from './interface';
import CardItem from './cardItem';
import './cards.css';
interface CardsListState {
  data: { products: ICardItem[] };
}

class Cards extends Component<{ data: CardsListState['data']; isLoading: boolean }> {
  render(): ReactNode {
    const { data, isLoading } = this.props;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        <ul className="products__list" data-testid="cards">
          {data.products.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}
        </ul>
      </>
    );
  }
}

export default Cards;
