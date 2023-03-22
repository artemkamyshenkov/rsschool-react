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
  errors: { [key: string]: string | boolean };
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
    errors: {
      productName: '',
      productPrice: '',
      productCategory: '',
      productDate: '',
      productImg: '',
      isChecked: false,
      publicDays: '',
    },
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

    const errors = this.validateError();

    if (Object.keys(errors).length !== 0) {
      this.setState({ errors });
      return;
    }

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
      errors: {},
    });
    setTimeout(() => {
      this.setState({ isSubmitted: false });
    }, 1500);
    this.formRef.current?.reset();
  }

  handleChange = (name: string, value: string | boolean) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  validateError() {
    const errors: { [key: string]: string } = {};
    const today = new Date();
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    switch (true) {
      case this.state.productName === '' || this.state.productName.length < 3:
        errors['productName'] = 'Product name must be at least 3 characters';
        break;
      case this.state.productPrice <= 0:
        errors['productPrice'] = 'Price must be greater than 0';
        break;
      case this.state.productCategory === '':
        errors['productCategory'] = 'Category selection is required';
        break;
      case this.state.productDate === '':
        errors['productDate'] = 'Date is required';
        break;
      case this.state.productDate < '1900-01-01':
        errors['productDate'] = 'Date сannot be lower than 1900-01-01';
        break;
      case date <= new Date(this.state.productDate):
        errors['productDate'] = 'Production date must be less than today';
        break;
      case this.state.productImg === '':
        errors['productImg'] = 'Foto is required';
        break;
      case this.state.isChecked === false:
        errors['isChecked'] = 'User agreement is required';
        break;
      case this.state.publicDays === '':
        errors['publicDays'] = 'This field is required';
        break;
      default:
        break;
    }
    return errors;
  }

  render(): ReactNode {
    return (
      <>
        <h3 className="form__title">On this page you can add your product card</h3>
        <form onSubmit={this.handleSubmit.bind(this)} ref={this.formRef}>
          <div className="form__content">
            <div className="form__container">
              <InpitName
                onChange={this.handleChange.bind(this)}
                error={this.state.errors.productName}
              />
              <InpitNumber
                onChange={this.handleChange.bind(this)}
                error={this.state.errors.productPrice}
              />
              <DropDown
                onChange={this.handleChange.bind(this)}
                error={this.state.errors.productCategory}
                selectedOption={this.state.productCategory}
              />
              <InpitDate
                onChange={this.handleChange.bind(this)}
                error={this.state.errors.productDate}
              />
              <FileUpload
                onChange={this.handleChange.bind(this)}
                error={this.state.errors.productImg}
              />
              <CheckBoxField
                onChange={this.handleChange.bind(this)}
                error={this.state.errors.isChecked}
                isChecked={this.state.isChecked}
              />
              <RadioField
                onChange={this.handleChange.bind(this)}
                error={this.state.errors.publicDays}
                publicDays={this.state.publicDays}
              />
              <button className="item__button">Submit</button>
              {this.state.isSubmitted && <p>Form sent</p>}
            </div>
          </div>
        </form>
        <CreatedProductList data={this.state.products} />
      </>
    );
  }
}

export default ProductForm;
