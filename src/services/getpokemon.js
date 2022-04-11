import devData from "../devData";

function getPokemon(DEV) {
  if (DEV) {
    return new Promise((resolve, reject) => {
      resolve(devData);
      reject({});
    })
  }
  return fetch('/pokedexdata')
    .then((response) => {
      return response.json()
    }).then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export default getPokemon;
