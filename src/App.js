import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      array: [],
      onInputChange: this.onInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  validateForm = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const minValue = 0;
    const maxValue = 90;
    const sumTotal = 210;

    const name = cardName.length > minValue;
    const image = cardImage.length > minValue;
    const description = cardDescription.length > minValue;
    const verifyAttr1 = Number(cardAttr1) >= minValue && Number(cardAttr1) <= maxValue;
    const verifyAttr2 = Number(cardAttr2) >= minValue && Number(cardAttr2) <= maxValue;
    const verifyAttr3 = Number(cardAttr3) >= minValue && Number(cardAttr3) <= maxValue;
    const verifyAttr = verifyAttr1 && verifyAttr2 && verifyAttr3;
    const sumTotalATT = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const maxValueAttr = sumTotalATT <= sumTotal;

    return (
      name
      && image
      && description
      && cardRare
      && verifyAttr
      && maxValueAttr
    );
  };

  onInputChange = ({ target }) => {
    const { type, name, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }), () => ({
      isSaveButtonDisabled: this.validateForm,
    }));
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      array,
    } = this.state;
    const objectCart = {
      cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    };
    array.push(objectCart);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
    });
  };

  render() {
    return (
      <section>
        <Form
          { ...this.state }
          isSaveButtonDisabled={ !this.validateForm() }
        />
        <Card { ...this.state } />
      </section>
    );
  }
}

export default App;
