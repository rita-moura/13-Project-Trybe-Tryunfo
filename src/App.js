import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

// const maxValue = 90;
const minValue = 0;
// const sumTotal = 210;

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: this.onInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  validateForm = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      // cardAttr1,
      // cardAttr2,
      // cardAttr3,
    } = this.state;

    const name = cardName.length <= minValue;
    const image = cardImage.length <= minValue;
    const description = cardDescription.length <= minValue;

    // const verifyAttr1 = Number(cardAttr1) >= minValue && Number(cardAttr1) <= maxValue;
    // const verifyAttr2 = Number(cardAttr2) >= minValue && Number(cardAttr2) <= maxValue;
    // const verifyAttr3 = Number(cardAttr3) >= minValue && Number(cardAttr3) <= maxValue;

    // const verifyAttr = verifyAttr1 && verifyAttr2 && verifyAttr3;

    // const totalValue = (
    //   Number(cardAttr1)
    // + Number(cardAttr2)
    // + Number(cardAttr3)) <= sumTotal;

    return (
      name
      || image
      || description
      // || totalValue
      // || verifyAttr
    );
  };

  onInputChange = ({ target }) => {
    const { type, name, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    return (
      <section>
        <Form
          { ...this.state }
          isSaveButtonDisabled={ this.validateForm() }
        />
        <Card { ...this.state } />
      </section>
    );
  }
}

export default App;
