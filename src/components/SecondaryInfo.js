import React from 'react';
import PokedexContext from '../contexts/pokedex';

function SecondayInfo() {
  return (
    <div className="description-container">
      <div className="description"><p className="pokemon-description"></p></div>
      <div className="type-div">
        <div className="type-heading">Type(s)</div>
        <div className="type-content"></div>
      </div>
    </div>
  );
}

export default SecondayInfo;
