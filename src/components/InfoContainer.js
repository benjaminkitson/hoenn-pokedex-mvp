import React from 'react';
import PokemonImage from './PokemonImage';
import InfoItems from './InfoItems';
import SecondayInfo from './SecondaryInfo';
import PokedexContext from '../contexts/pokedex';

function InfoContainer() {
  return (
  <div className="info-container info-wrapper">
    <PokemonImage />
    <InfoItems />
    <SecondayInfo />
  </div>
  );
}

export default InfoContainer;
