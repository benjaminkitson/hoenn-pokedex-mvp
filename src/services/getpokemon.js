function getPokemon() {

  return new Promise((resolve, reject) => {
    fetch('/pokedexdata', { mode: 'no-cors' })
      .then(response => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      });
  })
};

export default getPokemon;
