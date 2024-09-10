const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "JamÃ³n"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const pizzasContent = document.getElementById("shopContent");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const noResults = document.getElementById("noResults");

const displayPizzas = (filteredpizzas) => {
  pizzasContent.innerHTML = "";
  noResults.style.display = "none";
  if (filteredpizzas.length === 0) {
    noResults.style.display = "block";
  } else {
    filteredpizzas.forEach((pizza) => {
      const content = document.createElement("div");
      content.className = "card-products";
      content.innerHTML = `
        <img src="${pizza.imagen}" alt="${pizza.nombre}">
        <h3>${pizza.nombre}</h3>
        <h5>Ingredientes: ${pizza.ingredientes.join(", ")}</h5>
        <p>Precio: $${pizza.precio}</p>
      `;
      pizzasContent.append(content);
      localStorage.setItem("lastPizza", JSON.stringify(filteredpizzas[0]));
    });
  }
};

const handleSearch = () => {
  const searchTerm = searchInput.value;
  const filteredpizzas = pizzas.filter((pizza) =>
    pizza.id.toString().startsWith(searchTerm)
  );
  displayPizzas(filteredpizzas);
};

searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

window.addEventListener("load", () => {
  const lastPizza = localStorage.getItem("lastPizza");
  if (lastPizza) {
    displayPizzas([JSON.parse(lastPizza)]);
  }
});
