const detail = document.getElementById('detail')
const backButton = document.getElementById('backButton')
const params = new URLSearchParams(window.location.search);
const number = params.get('number');

function convertPokemonToDiv(pokemon) {
    return `
        <div class="pokemon ${pokemon.type}">
            <div class="title">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
            </div>
            <div class="detail-container">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </div>
    `
}

function loadPokemonDetail(number) {
    pokeApi.getPokemon(number).then((pokemon) => {
        const newHtml = convertPokemonToDiv(pokemon)

        detail.innerHTML += newHtml
    })
}

loadPokemonDetail(number)

backButton.addEventListener('click', () => {
    window.history.back()
})