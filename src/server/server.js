const express = require('express');
const pokedex = require('./server/pokedex');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

app.use(express.static(path.join(__dirname, "../public")))

const maintenance = async (req, res, next) => {
  res.send("Coming soon! Check out the readme for the API on GitHub")
}

app.get('', maintenance, (req, res) => {
  res.render('index.hbs')
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
