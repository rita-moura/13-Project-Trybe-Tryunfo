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
      arrayCardSave: [],
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
    this.setState((prev) => ({
      arrayCardSave: [...prev.arrayCardSave, objectCart],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
    }), () => {
      this.setState({
        hasTrunfo: true,
      });
    });
  };

  render() {
    const { arrayCardSave } = this.state;
    return (
      <section>
        <Form
          { ...this.state }
          isSaveButtonDisabled={ !this.validateForm() }
        />
        {arrayCardSave.map((element) => (
          <Card
            key={ element.cardName }
            cardName={ element.cardName }
            cardDescription={ element.cardDescription }
            cardImage={ element.cardImage }
            cardRare={ element.cardRare }
            cardAttr1={ element.cardAttr1 }
            cardAttr2={ element.cardAttr2 }
            cardAttr3={ element.cardAttr3 }
            cardTrunfo={ element.cardTrunfo }
          />
        ))}
      </section>
    );
  }
}

export default App;
