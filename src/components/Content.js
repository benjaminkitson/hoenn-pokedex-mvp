import React from 'react';
import PokedexContext from '../contexts/pokedex';

function Content() {

  const utils = {
  };

  return (
    <PokedexContext.Provider value={utils}>
      <div className="content">
      </div>
    </PokedexContext.Provider>
  );
}

export default Content;
