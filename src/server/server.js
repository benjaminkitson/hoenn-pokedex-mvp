const express = require('express');
const pokedex = require('./pokedex');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../../public")))

app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.get('/pokedexdata', (req, res) => {
  res.json(pokedex)
})

app.get('/pokedexdata/name/:name', (req, res) => {

  const pokemon = pokedex.find((pokemon) => {
    return pokemon.name.toLowerCase() === req.params.name
  })
  if (pokemon) res.send(pokemon)

  res.status(400).send("Invalid request!")

})

app.get('/pokedexdata/id/:id', (req, res) => {

  const pokemon = pokedex.find((pokemon) => {
    return pokemon.id === parseInt(req.params.param)
  })
  if (pokemon) res.send(pokemon)

  res.status(400).send("Invalid request!")

})

app.get('/pokedexdata/type/:type', (req,res) => {
  const pokemon = pokedex.filter((pokemon) => {
    const lowerTypes = pokemon.types.map(type => type.toLowerCase())
    return lowerTypes.includes(req.params.type)
  })
  if (pokemon.length != 0) res.send(pokemon)

  res.status(400).send("Invalid request!")

})

app.get('/pokedexdata/ability/:ability', (req, res) => {
  const pokemon = pokedex.filter((pokemon) => {
    return pokemon.ability.toLowerCase() === req.params.ability
  })
  if (pokemon.length != 0) res.send(pokemon)

  res.status(400).send("Invalid request!")

})

app.get('*', (req, res) => {
  res.status(400).send("Invalid request")
})

app.listen(PORT, () => {
  console.log("Pokémon! (gotta catch 'em all)")
})
