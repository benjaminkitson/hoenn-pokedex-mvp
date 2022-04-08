import React from 'react';
import PokedexContext from '../contexts/pokedex';
import InfoContainer from './InfoContainer';
import ListContainer from './ListContainer';

function Content() {

  const utils = {
  };

  return (
    <PokedexContext.Provider value={utils}>
      <div className="content">
        <InfoContainer/>
        <ListContainer/>
      </div>
    </PokedexContext.Provider>
  );
}

export default Content;
