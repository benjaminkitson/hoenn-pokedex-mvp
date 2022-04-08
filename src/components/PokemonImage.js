import React from 'react';
import PokedexContext from '../contexts/pokedex';

function PokemonImage() {
  return (
    <div className="pokemon-image">
      <img src="images/pokeball.svg" className="pokeball-placeholder" />
    </div>
  );
}

export default PokemonImage;
