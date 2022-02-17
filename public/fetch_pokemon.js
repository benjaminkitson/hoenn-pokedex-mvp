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

let pokedex

fetch("/pokedexdata")
  .then(response => response.json())
  .then((data) => {
    pokedex = data
    data.forEach((pokemon) => {
    const pokemonC = pokemon.name
    const id = pokemon.id
    const thumb = pokemon.thumbImageSrc

    pokemonList.insertAdjacentHTML('beforeend', `
        <li>
          <div data-id="${id}" class="pokemon ${pokemonCounter === 386 ? "last" : ""}">
            <div class="thumb"><img src="${thumb}"></div>
            <div class="name">${pokemonC}</div>
            <div class="id">#${id}</div>
          </div>
        </li>
      `)
    })
    const pokemons = document.querySelectorAll('.pokemon');
    pokemons.forEach((pokemon) => {
      pokemon.addEventListener('mouseup', showData)
      pokemon.addEventListener('touchend', (e) => {
        console.log(e)
      })
    })
  })



// function showData() {
//   const id = this.getAttribute("data-id")

//   const displayPokemon = {}

//   fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
//     .then(response => response.json())
//     .then((data) => {
//       displayPokemon['description'] = data.flavor_text_entries[9].flavor_text})

//       fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//       .then(response => response.json())
//       .then((data) => {

//         displayPokemon["height"] = data.height * 10
//         displayPokemon["weight"] = Math.ceil(data.weight / 10)
//         displayPokemon["id"] = data.id
//         unformattedTypes = data.types.map(object => object.type.namgit adde)
//         displayPokemon["types"] = unformattedTypes.map((type) => {
//           let letters = type.split('')
//           letters[0] = letters[0].toUpperCase()
//           return letters.join('')
//         })

//         console.log(displayPokemon.types)

//         let letters = data.forms[0].name.split('')
//         letters[0] = letters[0].toUpperCase()
//         displayPokemon['name']= letters.join('')

//         let letters2 = data.abilities[0].ability.name.split('')
//         letters2[0] = letters2[0].toUpperCase()
//         displayPokemon['ability'] = letters2.join('')

//         pokemonPicture.innerHTML = `
//           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${displayPokemon.id}.png"
//           class="pokemon-main-picture">
//           `
//         setTimeout(function() {

//
//         }, 200);
//       })

//     console.log(displayPokemon)
// }

function showData() {
  const id = parseInt(this.getAttribute("data-id"))
  const pokemon = pokedex.find(pokemon => pokemon.id === id)
  console.log(pokemon)
  fetch(pokemon.mainImageSrc)
    .then(response => response.blob())
    .then((blob) => {
      const imageURL = URL.createObjectURL(blob)
      pokemonPicture.innerHTML = `
      <img src="${imageURL}"
      class="pokemon-main-picture">
      `
      pokemonName.innerHTML = pokemon.name
      pokemonAbility.innerHTML = pokemon.ability
      pokemonHeight.innerHTML = pokemon.height >= 100 ? `${(pokemon.height / 100).toFixed(2)}m` : `${pokemon.height}cm`
      pokemonWeight.innerHTML = pokemon.weight + "kg"
      pokemonDescription.innerHTML = (pokemon.description === undefined) ? "Description failed to load" : pokemon.description
      pokemonTypes.innerHTML = ''
      pokemon.types.forEach((type) => {
        pokemonTypes.insertAdjacentHTML('beforeend', `
          <div class="${type.toLowerCase()} type">${type}</div>
        `)
      })
    })
}
