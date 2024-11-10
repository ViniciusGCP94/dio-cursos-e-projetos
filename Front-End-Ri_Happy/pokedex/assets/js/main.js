const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecord = 11;
const limit = 5;
let offset = 0;




function loadPokemonItems (offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.typePrincipal}">
                <span class="number">${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.picture}" alt="${pokemon.name}">
                </div>       
            </li>
        `).join('');

            pokemonList.innerHTML += newHtml;
    })

};

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItems(offset, limit);
})