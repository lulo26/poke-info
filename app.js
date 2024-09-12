let containerCards = document.getElementById("containerCards");
let btnSearch = document.getElementById("btnSearch");

window.addEventListener("load", () =>{
  PrintFirst30();
}) 

function searchPokemon(value) {
  let route = `https://pokeapi.co/api/v2/pokemon/${value}`;

  fetch(route)
    .then((res) => res.json())
    .then((json) => printCard(json));
}

function printCard(pokemon) {
  console.log(pokemon);
  containerCards.innerHTML += `
          <div class="col mt-4">
          <div class="card" style="width: 18rem">
            <img src="${pokemon["sprites"]["other"]["official-artwork"]["front_default"]}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${pokemon.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">tipo: ${pokemon["types"]["0"]["type"]["name"]}</li>
              <li class="list-group-item">habilidades: ${pokemon["abilities"]["0"]["ability"]["name"]}</li>
              <li class="list-group-item">movimientos: ${pokemon["moves"]["0"]["move"]["name"]}</li>
              <li class="list-group-item">Experiencia Base: ${pokemon["base_experience"]}</li>
              <li class="list-group-item">altura: ${pokemon["height"]}</li>
              <li class="list-group-item">Orden: ${pokemon["order"]}</li>
            </ul>
          </div>
        </div>
  `;
}

function PrintFirst30() {
  for (let i = 0; i <= 30; i++) {
    searchPokemon(i);
    console.log(i);
  }
}

btnSearch.addEventListener("click", () => {
  let formSearch = document.getElementById("formSearch").value;
  containerCards.innerHTML = "";
  console.log(formSearch)
  searchPokemon(formSearch)
  if (formSearch == ""){
    PrintFirst30();
  }
});

/*  pokemons.results.map((pokemon) => {
    let card = `<div class="col">
    <div class="card" style="width: 18rem">
      <img src="${
        pokemon.sprites.other.official - artwork.front_default
      }" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">tipo: ${pokemon.types.type.name}</li>
        <li class="list-group-item">abilidades: ${
          pokemon.abilities.ability.name
        }</li>
        <li class="list-group-item">habitat: ${
          pokemon.location_area_encounters
        }</li>
        <li class="list-group-item">Experiencia Base: </li>
        <li class="list-group-item">tamaño:</li>
        <li class="list-group-item">Orden:</li>
      </ul>
    </div>
  </div>
  </div>`;
    containerCards.innerHTML += card;
  }); */
