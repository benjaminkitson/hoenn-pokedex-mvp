import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import getPokemon from '../services/getPokemon';
import getThumbImage from '../services/getThumbImage';

// Variable for switching between local and API data
// Dev-server will not work properly with this set to false

const DEV = false;

function ListContainer() {

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pokemonPromises = [];
    getPokemon(DEV)
      .then((pokemons) => {
        pokemons.forEach((pokemon) => {
          pokemonPromises.push(
            getThumbImage(pokemon.thumbImageSrc)
            .then((url) => {
              pokemon.downloadedThumb = url
              console.log(pokemon);
              })
          );
        });
        Promise.all(pokemonPromises)
          .then(() => {
            setPokemons(pokemons);
            setTimeout(() => {
              setIsLoading(false);
            }, 300);
          });
      });
  }, []);

  return (
    <div className="list-container">
      <ul className={`list ${isLoading ? "list--loading" : ""}`}>
        {pokemons.map(pokemon => <ListItem pokemon={pokemon} key={pokemon.id} isLoading={isLoading}/>)}
      </ul>
    </div>
  );
};

export default ListContainer;
