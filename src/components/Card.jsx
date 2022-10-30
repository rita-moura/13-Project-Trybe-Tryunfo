import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section>
        <p data-testid="name-card">{ `Nome da Carta: ${cardName}` }</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ `Descrição da carta: ${cardDescription}` }</p>
        <p data-testid="attr1-card">{ `Atributo I: ${cardAttr1}` }</p>
        <p data-testid="attr2-card">{ `Atributo II: ${cardAttr2}` }</p>
        <p data-testid="attr3-card">{ `Atributo III: ${cardAttr3}` }</p>
        <p>
          { `Soma dos Atributos: 
          ${Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)}` }
        </p>
        <p data-testid="rare-card">{ `Raridade da carta: ${cardRare}` }</p>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
