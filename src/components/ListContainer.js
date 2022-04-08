import React, { useState, useEffect } from 'react';
import PokedexContext from '../contexts/pokedex';
import ListItem from './ListItem';
import getPokemon from '../services/getpokemon';

function ListContainer() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemon()
      .then((result) => {
        setPokemons(result);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div className="list-container">
      <ul className="pokemon-list">
        {pokemons.map(pokemon => <ListItem pokemon={pokemon} key={pokemon.id}/>)}
      </ul>
    </div>
  );
}

export default ListContainer;
