import React, { Component, ReactNode, RefObject } from 'react';
import InpitName from './inputName';
import InpitDate from './inputDate';
import CreatedProductList from '../cards/createdProductList';
import { ICreatedCard } from '../cards/interface';

interface ProductFormState {
  productName: string;
  productDate: string;
  products: ICreatedCard[];
}

class ProductForm extends Component<object, ProductFormState> {
  formRef: RefObject<HTMLFormElement> = React.createRef();

  state = {
    productName: '',
    productDate: '',
    products: [],
  };

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { productName, productDate, products } = this.state;
    const newProduct: ICreatedCard = { title: productName, date: productDate, id: Date.now() };
    const newProducts: ICreatedCard[] = [...products, newProduct];
    this.setState({ products: newProducts, productName: '', productDate: '' });
    this.formRef.current?.reset();
  }

  handleNameChange = (name: string) => {
    this.setState({ productName: name });
  };

  handleDateChange = (date: string) => {
    this.setState({ productDate: date });
  };

  render(): ReactNode {
    return (
      <>
        <h3>On this page you can add your product card</h3>
        <form onSubmit={this.handleSubmit.bind(this)} ref={this.formRef}>
          <InpitName onNameChange={this.handleNameChange.bind(this)} />
          <InpitDate onDateChange={this.handleDateChange.bind(this)} />
          <button>Submit</button>
        </form>
        <CreatedProductList data={this.state.products} />
      </>
    );
  }
}

export default ProductForm;
