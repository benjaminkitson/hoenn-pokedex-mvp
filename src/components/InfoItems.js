import React, { useContext } from 'react';
import PokedexContext from '../contexts/pokedex';
import InfoItem from './InfoItem'

function InfoItems() {

  const { activePokemon } = useContext(PokedexContext);

  return (
    <div className="info">
      <InfoItem category="Name:" detail={activePokemon.name || ''} />
      <InfoItem category="Ability:" detail={activePokemon.ability || ''} />
      <InfoItem category="Height:" detail={activePokemon.height || ''} />
      <InfoItem category="Weight:" detail={activePokemon.weight || ''} />
    </div>
  );
}

export default InfoItems;
