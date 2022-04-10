import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import getPokemon from '../services/getPokemon';

// Variable for switching between local and API data
// Dev-server will not work with this set to true

const DEV = true

function ListContainer() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemon(DEV, setPokemons)
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
