import React from 'react';
import PokedexContext from '../contexts/pokedex';

function SecondaryInfo() {
  return (
    <div className="secondary-info">
      <div className="secondary-info__description"><p className="description__text"></p></div>
      <div className="secondary-info__type">
        <div className="type__heading">Type(s)</div>
        <div className="type__content"></div>
      </div>
    </div>
  );
}

export default SecondaryInfo;
