//Fetch pokemon script

let info

fetch("https://pokeapi.co/api/v2/pokemon?limit=386")
  .then(response => response.json())
  .then(data => data.results.forEach((pokemon) => {
  let letters = pokemon.name.split('')
  letters[0] = letters[0].toUpperCase()
  let pokemonC = letters.join('')
  if (pokemonCounter === 386) {
    pokemonC = pokemonC.split('-')
    pokemonC = pokemonC[0]
  }
  pokemonList.insertAdjacentHTML('beforeend', `
      <li>
        <div data-id="${pokemonCounter}" class="pokemon ${pokemonCounter === 386 ? "last" : ""}">
          <div class="thumb"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCounter}.png"></div>
          <div class="id">#${pokemonCounter}</div>
          <div class="name">${pokemonC}</div>
        </div>
      </li>
    `)
  pokemonCounter++
  }))

function showData() {
  const id = this.getAttribute("data-id")
  infoTab.innerHTML = ""

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then((data) => {

      let letters = data.forms[0].name.split('')
      letters[0] = letters[0].toUpperCase()
      let pokemonName = letters.join('')

      let letters2 = data.abilities[0].ability.name.split('')
      letters2[0] = letters2[0].toUpperCase()
      let pokemonAbility = letters2.join('')


      console.log(data)

    infoTab.insertAdjacentHTML("beforeend", `
      <div class="pokemon-info">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png">
        <div>Name: ${pokemonName}</div>
        <div>Ability: ${pokemonAbility}</div>
        <div>Height: ${data.height >= 10 ? `${(data.height / 10).toFixed(2)}m` : `${data.height * 10}cm`} </div>
        <div>Weight: ${Math.ceil(data.weight / 10)}kg </div>
      </div>
    `)

    })

}

setTimeout(() => {
  pokemons = document.querySelectorAll('.pokemon');
  pokemons.forEach((pokemon) => {
    pokemon.addEventListener('click', showData)
  })
}, 100);
