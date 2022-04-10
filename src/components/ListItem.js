import React, { useContext } from 'react';
import PokedexContext from '../contexts/pokedex';

function ListItem(props) {

  const { setActivePokemon } = useContext(PokedexContext);

  return (
    <li>
      <div className="list__pokemon" onClick={() => {setActivePokemon(props.pokemon)}}>
        <div className="pokemon__thumb"><img src={props.pokemon.thumbImageSrc} /></div>
        <div className="pokemon__name">{props.pokemon.name}</div>
        <div className="pokemon__id">{props.pokemon.id}</div>
      </div>
    </li>
  );
}

export default ListItem;
