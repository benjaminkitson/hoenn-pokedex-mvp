import React, { useContext } from 'react';
import PokedexContext from '../contexts/pokedex';

function SecondaryInfo() {

  const { activePokemon } = useContext(PokedexContext);

  function renderTypes() {
    console.log(activePokemon)
    if (activePokemon.types) {
      return activePokemon.types.map(type => <div className={`type ${type.toLowerCase()}`}>{type}</div>);
    } else {
      return ''
    }
  }

  return (
    <div className="secondary-info">
      <div className="secondary-info__description"><p className="description__text">{activePokemon.description || ''}</p></div>
      <div className="secondary-info__type">
        <div className="type__heading">Type(s)</div>
        <div className="type__content">
          {renderTypes()}
        </div>
      </div>
    </div>
  );
}

export default SecondaryInfo;
