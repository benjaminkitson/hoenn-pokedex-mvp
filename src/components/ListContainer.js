import React, { useState, useEffect } from 'react';
import PokedexContext from '../contexts/pokedex';
import ListItem from './ListItem';
import getPokemon from '../services/getpokemon';
import devData from '../devData';

// Variable for switching between local and API data
// Dev-server will not work with this set to true

const DEV = true

function ListContainer() {

  const [pokemons, setPokemons] = useState(DEV ? devData : []);

  useEffect(() => {
      if (DEV) {
        getPokemon()
          .then((result) => {
            setPokemons(result);
          })
          .catch((error) => {
            console.log(error);
          })
      }
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
