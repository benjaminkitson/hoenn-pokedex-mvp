import React, {useContext } from 'react';
import PokedexContext from '../contexts/pokedex';

function PokemonImage() {

  const { activePokemon } = useContext(PokedexContext);

  return (
    <div className="pokemon-image">
      <img src={`${activePokemon.mainImageSrc || "images/pokeball.svg"}`} className={`${Object.keys(activePokemon).length === 0 ? "pokeball-placeholder" : ""}`} />
    </div>
  );
}

export default PokemonImage;
