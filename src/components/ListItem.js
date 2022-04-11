import React, { useContext } from 'react';
import PokedexContext from '../contexts/pokedex';
import getMainImage from '../services/getMainImage';

function ListItem(props) {

  const { setActivePokemon, setMainImage } = useContext(PokedexContext);

  function renderPokemonData() {
    if (!props.isLoading) {
      getMainImage(props.pokemon.mainImageSrc)
        .then((url) => {
          setMainImage(url);
          setActivePokemon(props.pokemon);
        })
    }
  }

  return (
    <li>
      <div className={`list__pokemon ${props.isLoading ? "list__pokemon--loading" : ""}`} onClick={() => {renderPokemonData(props.pokemon)}}>
        <div className="pokemon__thumb"><img src={props.pokemon.downloadedThumb} /></div>
        <div className="pokemon__name">{props.pokemon.name}</div>
        <div className="pokemon__id">{props.pokemon.id}</div>
      </div>
    </li>
  );
}

export default ListItem;
