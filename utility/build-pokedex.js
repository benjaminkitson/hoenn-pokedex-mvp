const request = require('postman-request')
const fs = require('fs')

const promises = []

function capitalise(word) {
  letters = word.split('')
  letters[0] = letters[0].toUpperCase()
  return letters.join('')
}

for (let i = 1; i < 387; i++) {

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}/`
    const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${i}/`

    const pokemonPromise = new Promise((resolve, reject) => {

      setTimeout(() => {

        request({ url: pokemonUrl }, (error, response) => {

          const pokemon = {}

          if (error) console.log(error)

          const data = JSON.parse(response.body)
          pokemon.id = data.id
          pokemon.name = capitalise(data.forms[0].name)

          pokemon.ability = capitalise(data.abilities[0].ability.name)

          pokemon.height = data.height * 10

          pokemon.weight = Math.ceil(data.weight / 10)

          const unformattedTypes = data.types.map(object => object.type.name)

          pokemon.types = unformattedTypes.map((type) => {
            return capitalise(type)
          })

          pokemon.mainImageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`
          pokemon.thumbImageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`


          request({ url: speciesURL }, (error, response) => {
            if (error) console.log(error)
            const data2 = JSON.parse(response.body)

            const upperCaseNameRegex = new RegExp(pokemon.name.toUpperCase(), 'g')

            pokemon.description = data2.flavor_text_entries[9].flavor_text.replace(/\n/g, ' ').replace(/POKéMON/g, 'Pokémon').replace(upperCaseNameRegex, pokemon.name)
            const evolutionUrl = data2.evolution_chain.url

            request({ url: evolutionUrl }, (error, response) => {

              if (error) console.log(error)

              const data3 = JSON.parse(response.body)

              const chain = data3.chain

              pokemon.evolutionChain = [capitalise(chain.species.name)]

              if (chain.evolves_to[0]) {
                pokemon.evolutionChain.push(capitalise(chain.evolves_to[0].species.name))
              }

              if (chain.evolves_to[0] && chain.evolves_to[0].evolves_to[0]) {
                pokemon.evolutionChain.push(capitalise(chain.evolves_to[0].evolves_to[0].species.name))
              }

              console.log(pokemon)

              resolve(pokemon)
            })
          })
        })
      }, i * 1000)
    })

    promises.push(pokemonPromise)



}

Promise.all(promises)
.then((values) => {
  const sorted = values.sort((a, b) => {
    return a.id > b.id
  })
  const data = JSON.stringify(sorted)
  // console.log(sorted)
  fs.writeFileSync('pokedex.json', data)
})
