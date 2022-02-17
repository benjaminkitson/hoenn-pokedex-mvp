const fs = require('fs')

const pokedex = fs.readFileSync("pokedex.json", "utf-8")

const pokedexObject = JSON.parse(pokedex)

const names = []

pokedexObject.forEach((pokemon) => {
  names.push(pokemon.name)
})

pokedexObject.forEach((pokemon) => {
  const newChain = pokemon.evolutionChain.filter((item) => {
    return (names.includes(item))
  })
  pokemon.evolutionChain = newChain
})

const formattedPokedexJSON = JSON.stringify(pokedexObject)

fs.writeFileSync('formatted-pokedex.json', formattedPokedexJSON)
