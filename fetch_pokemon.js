fetch("https://pokeapi.co/api/v2/pokemon?limit=386")
  .then(response => response.json())
  .then(data => data.results.forEach((pokemon) => {
    let letters = pokemon.name.split('')
    letters[0] = letters[0].toUpperCase()
    console.log(letters)
    let pokemonC = letters.join('')
    if (pokemonCounter === 386) {
      pokemonC = pokemonC.split('-')
      pokemonC = pokemonC[0]
    }
    pokemonList.insertAdjacentHTML('beforeend', `
        <li>
          <div class="pokemon ${pokemonCounter === 386 ? "last" : ""}">
            <div class="thumb"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCounter}.png"></div>
            <div class="id">#${pokemonCounter}</div>
            <div class="name">${pokemonC}</div>
          </div>
        </li>
      `)
    pokemonCounter++
  }))
