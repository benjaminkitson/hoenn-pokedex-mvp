import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import getPokemon from '../services/getPokemon';

// Variable for switching between local and API data
// Dev-server will not work properly with this set to false

const DEV = true;

function ListContainer() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemon(DEV, setPokemons)
  }, []);

  return (
    <div className="list-container">
      <ul className="list">
        {pokemons.map(pokemon => <ListItem pokemon={pokemon} key={pokemon.id}/>)}
      </ul>
    </div>
  );
}

export default ListContainer;
