
function getPokemonStats(pokemonId) {
    const urlStats = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        fetch(urlStats)
            .then(response => response.json())
            .then(jsonBody => jsonBody.stats)
            .then(stats => convertPokemonApiToPokemonModelAtributes(stats))
    }

function addStats(pokemon){
        stats = getPokemonStats(pokemon.id)
        return `
        <p> teste</p>
        <p>---</p>      
        `
    }

