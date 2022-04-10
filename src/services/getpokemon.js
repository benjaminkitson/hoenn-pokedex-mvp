import devData from "../devData";

function getPokemon(DEV, setPokemons) {

  if (!DEV) {
    return new Promise((resolve, reject) => {
      fetch('/pokedexdata', { mode: 'no-cors' })
        .then(response => response.json())
        .then((data) => {
          setPokemons(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  } else {
    setPokemons(devData);
  }
};

export default getPokemon;
