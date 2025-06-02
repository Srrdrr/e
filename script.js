import pokemons from "./pokemons.js";

let containerPokemons = document.querySelector('.containerPokemons')

let searchPokemon = document.querySelector('#searchPokemon');
let searchButton = document.querySelector('.searchButton');
let pokemonType = document.querySelector('#pokemonType');


function generator(pokemon){
    containerPokemons.innerHTML =''
    pokemon.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML = `
            <h1 class="pokemon-name">${element.name}</h1>
            <img src=${element.img} alt="" class="pokemon-img">
            <p class="pokemon-type">
                ${element.type}
            </p>
            <p class="pokemon-weight">
                ${element.weight}
            </p>
        `;
        containerPokemons.appendChild(card)
    });
}


function filterPokemons() {
    let filterPokemons = pokemons;

    const searchValue = searchPokemon.value.toLowerCase();
    if (searchValue) {
        filterPokemons = filterPokemons.filter((pokemon) => 
        pokemon.name.toLowerCase().includes(searchValue)
    );
    }
    generator(filterPokemons);
}

searchButton.addEventListener('click', filterPokemons);
searchPokemon.addEventListener('input', filterPokemons);

generator(pokemons)