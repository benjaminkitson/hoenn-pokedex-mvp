import React, { useContext, useState, useEffect } from 'react';
import PokedexContext from '../contexts/pokedex';
import getMainImage from '../services/getMainImage';

function PokemonImage() {

  const { activePokemon } = useContext(PokedexContext);

  // isPlaceholder doesnt seem to fix the issue

  const [imageUrl, setImageUrl] = useState("images/pokeball.svg")
  const [isPlaceholder, setIsPlaceholder] = useState(true)

  useEffect(() => {
    if (Object.keys(activePokemon).length !== 0) {
      getMainImage(setImageUrl, setIsPlaceholder, activePokemon.mainImageSrc);
    }
  }, [activePokemon])

  return (
    <div className="pokemon-image">
      <img src={imageUrl} className={`${isPlaceholder ? "pokeball-placeholder" : ""}`} />
    </div>
  );
}

export default PokemonImage;
