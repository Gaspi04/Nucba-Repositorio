import { getList } from "./poke.js"; // Asegúrate de que esta ruta sea correcta

const pizzasContent = document.getElementById("pizzasContent");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const noResults = document.getElementById("noResults");

const displayPokemons = (filteredPokemons) => {
  pizzasContent.innerHTML = ""; // Limpiar el contenido anterior
  noResults.style.display = "none"; // Ocultar el mensaje de no resultados

  if (filteredPokemons.length === 0) {
    noResults.style.display = "block"; // Mostrar mensaje si no hay resultados
  } else {
    filteredPokemons.forEach((pokemon) => {
      const content = document.createElement("div");
      content.className = "card-products";
      content.innerHTML = `
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
                <h5>Tipo Principal: ${
                  pokemon.types[0]
                }</h5>  <!-- Mostrar el primer tipo -->
                <p>Altura: ${pokemon.height.toFixed(
                  2
                )} m</p>  <!-- Altura convertida a metros -->
                <p>Peso: ${pokemon.weight.toFixed(
                  2
                )} kg</p>  <!-- Peso convertido a kilogramos -->
            `;
      pizzasContent.append(content); // Agregar la tarjeta de cada Pokémon
      localStorage.setItem("lastPokemon", JSON.stringify(filteredPokemons[0])); // Guardar el último Pokémon en localStorage
    });
  }
};

const handleSearch = async () => {
  const searchTerm = searchInput.value.toLowerCase();
  let allPokemons = [];
  let page = 0;
  let found = false;

  // Lógica para buscar hasta encontrar el Pokémon deseado
  while (!found) {
    const result = await getList(page);
    allPokemons = allPokemons.concat(result.pokemons);

    // Filtrar por ID y nombre
    const filteredPokemons = allPokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchTerm) ||
        pokemon.id.toString().startsWith(searchTerm)
    );

    if (filteredPokemons.length > 0) {
      displayPokemons(filteredPokemons);
      found = true; // Si se encuentran resultados, salimos del ciclo
    } else if (result.next) {
      // Incrementar la página si hay más resultados
      page++;
    } else {
      // Si no hay más resultados y no se encontró, mostrar el mensaje
      noResults.style.display = "block";
      found = true; // Salimos del ciclo si no hay más resultados
    }
  }
};
searchButton.addEventListener("click", handleSearch);

window.addEventListener("load", () => {
  const lastPokemon = localStorage.getItem("lastPokemon");
  if (lastPokemon) {
    displayPokemons([JSON.parse(lastPokemon)]);
  }
});
