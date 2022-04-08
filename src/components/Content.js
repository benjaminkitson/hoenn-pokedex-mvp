import React from 'react';
import PokedexContext from '../contexts/pokedex';
import MainContainer from './MainContainer';

function Content() {

  const utils = {
  };

  return (
    <PokedexContext.Provider value={utils}>
      <div className="content">
        <MainContainer position="left"/>
        <MainContainer position="right"/>
      </div>
    </PokedexContext.Provider>
  );
}

export default Content;
