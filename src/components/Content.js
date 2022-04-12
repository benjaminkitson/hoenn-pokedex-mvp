import React, { useState } from 'react';
import PokedexContext from '../contexts/pokedex';
import InfoContainer from './InfoContainer';
import ListContainer from './ListContainer';
import Pokeball from './Pokeball';
import Header from './Header';

function Content() {

  const [activePokemon, setActivePokemon] = useState({});
  const [mainImage, setMainImage] = useState('');

  const utils = {
    activePokemon,
    setActivePokemon,
    mainImage,
    setMainImage
  };

  return (
    <PokedexContext.Provider value={utils}>
      <div className="content">
        <Header />
        <div className="content__inner">
          <Pokeball />
          <InfoContainer/>
          <ListContainer/>
        </div>
      </div>
    </PokedexContext.Provider>
  );
};

export default Content;
