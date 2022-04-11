import React, { useContext, useState, useEffect } from 'react';
import PokedexContext from '../contexts/pokedex';

function PokemonImage() {

  const { mainImage } = useContext(PokedexContext);

  return (
    <div className="pokemon-image">
      {mainImage ? <img src={mainImage} className="pokemon-main-picture"/> : '' }
      <img src="images/pokeball.svg" className="pokeball-placeholder" />
    </div>
  );
}

export default PokemonImage;
