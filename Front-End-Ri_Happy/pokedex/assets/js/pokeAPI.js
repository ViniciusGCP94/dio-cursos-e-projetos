const pokeApi = {}


function convertPokeApiDetailPokemon (pokeDetails){
    const pokemon = new Pokemon();
    pokemon.name = pokeDetails.name;
    pokemon.order = pokeDetails.order;

    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types

    pokemon.types = types;
    pokemon.typePrincipal = type;

    pokemon.picture =  pokeDetails.sprites.other.dream_world.front_default;

    return pokemon;
}


pokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5 ) => {
    const url =  `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

/*Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
    fetch('https://pokeapi.co/api/v2/pokemon/5')
]).then((results) => {
    console.log(results)
})*/