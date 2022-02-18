A Hoenn Pokédex web-app + API!

After my issues navigating the PokéApi - It's great, but hardly beginner-friendly, and I have to assume needlessly in-depth for a lot of users - I've decided to have a go at my own one. It's MUCH smaller in size, and only extends to the first 386 Pokémon. I've included the Node script I used to extract and assemble the data from the PokéApi, so anyone can pretty much replicate this. 

The data is pretty much directly from the PokéApi, although I did a bunch of cleaning up and formatting, and removed certain later-Gen pokémon from evolution chains. 

The API can be accessed at hoenn-pokedex.herokuapp.com/pokedexdata (currently hoenn-pokedex-staging.herokuapp.com/pokedexdata) - this URL returns a JSON of all 386 pokemon from gens I-III. 

Searches can also effectively be carried out as follows:

  <strong>/pokedexdata/name/${name}</strong> - returns a given pokemon based on the name supplied

  <strong>/pokedexdata/id/${id}</strong> - returns a given pokemon based on the id supplied

  <strong>/pokedexdata/type/${type}</strong> - returns an array of pokemon of the supplied type

  <strong>/pokedexdata/ability/${ability}</strong> - returns an array of pokemon with the supplied ability
