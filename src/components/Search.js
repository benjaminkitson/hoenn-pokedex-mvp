import React from 'react';
import { useContext } from 'react';
import pokedex from '../contexts/pokedex';

function Search() {

  const { setSearch } = useContext(pokedex)

  function handleChange(e) {
    console.log(e.target.value)
  }

  return (
    <input className="search" type="text" onChange={handleChange}/>
  );
};

export default Search;
