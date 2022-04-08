import React, { useState } from 'react';
import PokedexContext from '../contexts/pokedex';
import getPokemon from '../services/getpokemon';

function ListContainer() {

  getPokemon()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })

  return (
    <div className="list-container">
      <ul className="pokemon-list">
      </ul>
    </div>
  );
}

export default ListContainer;
