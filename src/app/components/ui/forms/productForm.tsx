import React, { Component, ReactNode, RefObject } from 'react';
import { ICreatedCard } from '../cards/interface';
import InpitName from './inputName';
import InpitDate from './inputDate';
import CreatedProductList from '../cards/createdProductList';
import FileUpload from './inputFile';
import DropDown from './dropDown';
import InpitNumber from './inputNumber';
import CheckBoxField from './checkBoxField';
import RadioField from './radioField';
import './productForm.css';
interface ProductFormState {
  productName: string;
  productDate: string;
  productImg: Blob | string;
  productCategory: string;
  productPrice: number;
  isChecked: boolean;
  publicDays: string;
  isSubmitted: boolean;
  products: ICreatedCard[];
}

class ProductForm extends Component<object, ProductFormState> {
  formRef: RefObject<HTMLFormElement> = React.createRef();

  state = {
    productName: '',
    productDate: '',
    productImg: '',
    productCategory: '',
    productPrice: 0,
    isChecked: false,
    publicDays: '',
    products: [],
    isSubmitted: false,
  };

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const {
      productName,
      productDate,
      productImg,
      productCategory,
      productPrice,
      isChecked,
      publicDays,
      products,
    } = this.state;
    const newProduct: ICreatedCard = {
      title: productName,
      date: productDate,
      id: Date.now(),
      images: productImg,
      category: productCategory,
      price: productPrice,
      isChecked: isChecked,
      publicDays: publicDays,
    };
    const newProducts: ICreatedCard[] = [...products, newProduct];
    this.setState({
      products: newProducts,
      isSubmitted: true,
      productName: '',
      productDate: '',
      productImg: '',
      productCategory: '',
      productPrice: 0,
      isChecked: false,
      publicDays: '',
    });

    setTimeout(() => {
      this.setState({ isSubmitted: false });
      this.formRef.current?.reset();
    }, 1500);
  }

  handleChange = (name: string, value: string | boolean) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render(): ReactNode {
    return (
      <>
        <h3 className="form__title">On this page you can add your product card</h3>
        <form onSubmit={this.handleSubmit.bind(this)} ref={this.formRef}>
          <div className="form__content">
            <div className="form__container">
              <InpitName onChange={this.handleChange.bind(this)} />
              <InpitNumber onChange={this.handleChange.bind(this)} />
              <DropDown onChange={this.handleChange.bind(this)} />
              <InpitDate onChange={this.handleChange.bind(this)} />
              <FileUpload onChange={this.handleChange.bind(this)} />
              <CheckBoxField onChange={this.handleChange.bind(this)} />
              <RadioField onChange={this.handleChange.bind(this)} />
              <button className="item__button">Submit</button>
              {this.state.isSubmitted && <p>Форма отправлена</p>}
            </div>
          </div>
        </form>
        <CreatedProductList data={this.state.products} />
      </>
    );
  }
}

export default ProductForm;
