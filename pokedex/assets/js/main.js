const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;
const maxRecord = 151;


fetch('https://pokeapi.co/api/v2/machine/1')

function convertPokemonLi(pokemon){
    return `
    <li class="pokemon ${pokemon.pokemonType}">
    <span class="number ${pokemon.pokemonType}">${pokemon.pokemonNumber}</span>
    <span class="name">${pokemon.pokemonName}</span>

<div class = "detail">
<ol class="types">
    ${pokemon.pokemonTypes.map((type) => `<li class="type">${type}</li>`).join(' ')}
</ol>
    <img src=${pokemon.picture} alt="${pokemon.pokemonName}">
</div>
</li>
    `
}

function loadPokemonsItems(offset,limit){
pokeapi.getPokemons(offset,limit).then( (pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonLi).join(' ')
   })}

   loadPokemonsItems(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset+=limit
    const qntdRecord = offset + limit
    if(qntdRecord >= maxRecord){
        const newLimit = maxRecord -qntdRecord
        loadPokemonsItems(offset,newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else{

        loadPokemonsItems(offset,limit)
    }

})
