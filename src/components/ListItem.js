import React, { useContext } from 'react';
import PokedexContext from '../contexts/pokedex';

function ListItem(props) {

  const { setActivePokemon } = useContext(PokedexContext);

  return (
    <li>
      <div className="pokemon" onClick={() => {setActivePokemon(props.pokemon)}}>
        <div className="thumb"><img src={props.pokemon.thumbImageSrc} /></div>
        <div className="name">{props.pokemon.name}</div>
        <div className="id">{props.pokemon.id}</div>
      </div>
    </li>
  );
}

export default ListItem;
