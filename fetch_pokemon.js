//Fetch pokemon script

const pokemonList = document.querySelector('.pokemon-list');
const pokemonPicture = document.querySelector('.pokemon-image')
const infoTab = document.querySelector('.info-container');
const pokemonName = document.querySelector('.pokemon-name');
const pokemonAbility = document.querySelector('.pokemon-ability');
const pokemonHeight = document.querySelector('.pokemon-height');
const pokemonWeight = document.querySelector('.pokemon-weight');
const pokemonDescription = document.querySelector('.pokemon-description');
const pokemonTypes = document.querySelector('.type-content')


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

  const displayPokemon = {}

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    .then(response => response.json())
    .then((data) => {
      displayPokemon['description'] = data.flavor_text_entries[9].flavor_text})

      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then((data) => {

        displayPokemon["height"] = data.height * 10
        displayPokemon["weight"] = Math.ceil(data.weight / 10)
        displayPokemon["id"] = data.id
        unformattedTypes = data.types.map(object => object.type.name)
        displayPokemon["types"] = unformattedTypes.map((type) => {
          let letters = type.split('')
          letters[0] = letters[0].toUpperCase()
          return letters.join('')
        })

        console.log(displayPokemon.types)

        let letters = data.forms[0].name.split('')
        letters[0] = letters[0].toUpperCase()
        displayPokemon['name']= letters.join('')

        let letters2 = data.abilities[0].ability.name.split('')
        letters2[0] = letters2[0].toUpperCase()
        displayPokemon['ability'] = letters2.join('')

        pokemonPicture.innerHTML = `
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${displayPokemon.id}.png"
          class="pokemon-main-picture">
          `
        setTimeout(function() {

        pokemonName.innerHTML = displayPokemon.name
        pokemonAbility.innerHTML = displayPokemon.ability
        pokemonHeight.innerHTML = displayPokemon.height >= 100 ? `${(displayPokemon.height / 100).toFixed(2)}m` : `${displayPokemon.height}cm`
        pokemonWeight.innerHTML = displayPokemon.weight + "kg"
        pokemonDescription.innerHTML = (displayPokemon.description === undefined) ? "Description failed to load" : displayPokemon.description
        pokemonTypes.innerHTML = ''
        displayPokemon.types.forEach((type) => {
          let letters = type.split('')
          letters[0] = letters[0].toLowerCase()
          let formattedType = letters.join('')
          pokemonTypes.insertAdjacentHTML('beforeend', `
            <div class="${formattedType} type">${type}</div>
          `)
        })
        }, 200);
      })

    console.log(displayPokemon)
}

setTimeout(() => {
  pokemons = document.querySelectorAll('.pokemon');
  pokemons.forEach((pokemon) => {
    pokemon.addEventListener('click', showData)
    pokemon.addEventListener('touchend', showData)
  })
}, 100);
