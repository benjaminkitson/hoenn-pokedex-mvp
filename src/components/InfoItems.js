import React from 'react';
import PokedexContext from '../contexts/pokedex';
import InfoItem from './InfoItem'

function InfoItems() {
  return (
    <div className="info">
      <InfoItem category="Name:" />
      <InfoItem category="Ability:" />
      <InfoItem category="Height:" />
      <InfoItem category="Weight:" />
    </div>
  );
}

export default InfoItems;
