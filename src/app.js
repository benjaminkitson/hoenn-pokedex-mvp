const express = require('express');
const pokedex = require('./pokedex');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = pricess.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))
