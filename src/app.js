const express = require('express');
const pokedex = require('./pokedex');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

app.use(express.static(path.join(__dirname, "../public")))

app.get('', (req, res) => {
  res.render('index.hbs')
})

app.get('/pokedexdata', (req, res) => {
  res.json(pokedex)
})

app.listen(PORT, () => {
  console.log("Pokémon! (gotta catch 'em all)")
})
