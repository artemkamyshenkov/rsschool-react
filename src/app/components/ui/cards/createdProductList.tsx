import React, { Component, ReactNode } from 'react';
import { ICreatedCard } from './interface';
import CreatedProductItem from './createdProductItem';
import './cards.css';
interface CreatedProductListState {
  data: ICreatedCard[];
}

class CreatedProductList extends Component<{ data: CreatedProductListState['data'] }> {
  render(): ReactNode {
    const { data } = this.props;

    return (
      <>
        <ul className="products__list">
          {data.map((item) => (
            <CreatedProductItem item={item} key={item.id} />
          ))}
        </ul>
      </>
    );
  }
}

export default CreatedProductList;
