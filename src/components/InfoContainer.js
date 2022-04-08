import React from 'react';
import PokedexContext from '../contexts/pokedex';

function InfoContainer() {
  return (
  <div className={"info-wrapper left"}>
    <div className="pokemon-image">
      <img src="images/pokeball.svg" className="pokeball-placeholder" />
    </div>

    <div className="info-container">
      <div className="info-item">
        <div className="category">Name:</div>
        <div className="detail pokemon-name"></div>
      </div>
      <div className="info-item">
        <div className="category">Ability:</div>
        <div className="detail pokemon-ability"></div>
      </div>
      <div className="info-item">
        <div className="category">Height: </div>
        <div className="detail pokemon-height"></div>
      </div>
      <div className="info-item">
        <div className="category">Weight:</div>
        <div className="detail pokemon-weight"></div>
      </div>
    </div>

    <div className="description-container">
      <div className="description"><p className="pokemon-description"></p></div>
      <div className="type-div">
        <div className="type-heading">Type(s)</div>
        <div className="type-content"></div>
      </div>
    </div>
  </div>
  );
}

export default InfoContainer;
