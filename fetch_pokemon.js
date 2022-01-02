//Fetch pokemon script

const pokemonList = document.querySelector('.pokemon-list');
const pokemonPicture = document.querySelector('.pokemon-image')
const infoTab = document.querySelector('.info-container');


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
  pokemonPicture.innerHTML = ""

  let description

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    .then(response => response.json())
    .then((data) => description = data.flavor_text_entries[14].flavor_text)

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then((data) => {

      console.log(data)
      console.log(description)
      let letters = data.forms[0].name.split('')
      letters[0] = letters[0].toUpperCase()
      let pokemonName = letters.join('')

      let letters2 = data.abilities[0].ability.name.split('')
      letters2[0] = letters2[0].toUpperCase()
      let pokemonAbility = letters2.join('')

    pokemonPicture.insertAdjacentHTML('beforeend',`
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" class="pokemon-main-picture">
    `)

    infoTab.insertAdjacentHTML("beforeend", `
      <div class="pokemon-info">
        <div class="sub-info">
          <div class="div-1">
            <div>Name: ${pokemonName}</div>
            <div>Ability: ${pokemonAbility}</div>
          </div>
          <div class="div-2">
            <div>Height: ${data.height >= 10 ? `${(data.height / 10).toFixed(2)}m` : `${data.height * 10}cm`} </div>
            <div>Weight: ${Math.ceil(data.weight / 10)}kg </div>
          </div>
        </div>
        <div class="description">${description}</div>
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
