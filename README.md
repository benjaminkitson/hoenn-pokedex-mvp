A Hoenn Pokédex API + web-app!

After my issues navigating the PokéApi - It's great, but hardly beginner-friendly, and I have to assume needlessly in-depth for a lot of users - I've decided to have a go at my own one. It's MUCH smaller in size, and only extends to the first 386 Pokémon. I've included the Node script I used to extract and assemble the data from the PokéApi, so anyone can pretty much replicate this. 

The data is pretty much directly from the PokéApi, although I did a bunch of cleaning up and formatting, and removed certain later-gen pokémon from evolution chains. 

The API can be accessed at <strong>hoenn-pokedex.herokuapp.com/pokedexdata</strong> (currently <strong>hoenn-pokedex-staging.herokuapp.com/pokedexdata</strong> while I'm still developing bits of it) - this URL returns a JSON of all 386 pokemon from gens I-III, with some basic data like types, sizes, and abilities. 

Searches can also effectively be carried out as follows:

  <strong>/pokedexdata/name/${name}</strong> - returns a given pokemon based on the name supplied

  <strong>/pokedexdata/id/${id}</strong> - returns a given pokemon based on the id supplied

  <strong>/pokedexdata/type/${type}</strong> - returns an array of pokemon of the supplied type

  <strong>/pokedexdata/ability/${ability}</strong> - returns an array of pokemon with the supplied ability


I'd like to thank the PokéApi bunch for their hard work - I'm not sure this use case was necessarily what they had in mind, but without their API making mine wouldn't have been possible. The various images are also still from their Github hosting.

Clearly I don't own any of the intellectual property in use here, so credit to Nintendo etc for that, and for them being chill about people making this kind of thing - more on that here:

https://www.forbes.com/sites/matthickey/2014/11/17/nintendo-to-allow-its-characters-in-other-media-license-free/?sh=243269584180


