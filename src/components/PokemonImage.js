import React, { useContext, useState, useEffect } from 'react';
import PokedexContext from '../contexts/pokedex';
import getMainImage from '../services/getMainImage';

function PokemonImage() {

  const { activePokemon } = useContext(PokedexContext);

  // isPlaceholder doesnt seem to fix the issue

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (Object.keys(activePokemon).length !== 0) {
      getMainImage(setImageUrl, activePokemon.mainImageSrc);
    }
  }, [activePokemon])

  return (
    <div className="pokemon-image">
      {imageUrl ? <img src={imageUrl} className="pokemon-main-picture"/> : '' }
      <img src="images/pokeball.svg" className="pokeball-placeholder" />
    </div>
  );
}

export default PokemonImage;
