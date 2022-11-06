const pokeapi = {}

function convertPokerApiDetailToPokemon(pokemonDetail){
    const pokemon = new Pokemon();
    pokemon.pokemonName = pokemonDetail.name;
    pokemon.pokemonNumber = pokemonDetail.id;
    
    const types =  pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types    
    pokemon.pokemonTypes = types
    pokemon.pokemonType = type
    
    pokemon.picture = pokemonDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeapi.getPokemonDetail = (pokemon) => {
   return fetch(pokemon.url)
       .then((response) => response.json())
       .then((pokemon) => convertPokerApiDetailToPokemon(pokemon))
}

pokeapi.getPokemons = (offset=0,limit=5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
            .then((detailRequest) => Promise.all((detailRequest)))
            .then((pokemonsDetails) => pokemonsDetails)
}
