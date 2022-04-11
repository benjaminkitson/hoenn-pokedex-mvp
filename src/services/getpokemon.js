import devData from "../devData";

function getPokemon(DEV) {

  if (!DEV) {
    return new Promise((resolve, reject) => {
      fetch('/pokedexdata', { mode: 'no-cors' })
        .then(response => response.json())
        .then((pokemons) => {
          return(pokemons);
        })
        .catch((error) => {
          reject(error);
        });
    });
  } else {
    return devData;
  }
};

export default getPokemon;
