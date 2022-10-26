import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="name-input">
            Nome da Carta:
            <input
              id="name-input"
              type="text"
              data-testid="name-input"
              placeholder="Digite o nome da carta"
            />
          </label>
        </div>

        <div>
          <label htmlFor="description-input">
            Descrição da Carta:
            <textarea id="description-input" data-testid="description-input" />
          </label>
        </div>

        <div>
          <label htmlFor="attr1-input">
            Atributo 1:
            <input
              id="attr1-input"
              type="number"
              data-testid="attr1-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr2-input">
            Atributo 2:
            <input
              id="attr2-input"
              type="number"
              data-testid="attr2-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr3-input">
            Atributo 3:
            <input
              id="attr3-input"
              type="number"
              data-testid="attr3-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="image-input">
            Imagem:
            <input
              id="image-input"
              type="text"
              data-testid="image-input"
              placeholder="Adicione imagem"
            />
          </label>
        </div>

        <div>
          <label htmlFor="rare-input">
            Adicione a raridade da carta:
            <select id="rare-input" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="trunfo-input">
            Super trunfo:
            <input
              type="checkbox"
              id="trunfo-input"
              data-testid="trunfo-input"
            />
          </label>
        </div>

        <div>
          <button type="button" data-testid="save-button">Salvar</button>
        </div>

      </form>
    );
  }
}

export default Form;
