const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

function impares(pizzas) {
  let pizzasImpares = pizzas.filter(function (pizza) {
    return pizza.id % 2 !== 0;
  });

  let nombres = pizzasImpares.map(function (pizza) {
    return pizza.nombre;
  });

  console.log("Pizzas con id impares:" + nombres);
}

var pizzas1 = impares(pizzas);

function economicas(pizzas) {
  let pizzasbaratas = pizzas.filter(function(pizza) {
    return pizza.precio <= 600;
  });
  let nombres = pizzasbaratas.map(function(pizza) {
    return pizza.nombre;
  });
  console.log("Pizzas mas baratas que 600: " +nombres);
}

var pizzas2 = economicas(pizzas);


function precio(pizzas) {
  let np = pizzas.map(function(pizza) {
    return `${pizza.nombre}: $${pizza.precio}`;
  });
  console.log(np);
}

var pizzas3 = precio(pizzas);

function ingredientes(pizzas) {
  pizzas.forEach(function(pizza) {
    console.log(`Ingredientes de la ${pizza.nombre}:`);
    console.log(pizza.ingredientes.join(", "));
  });
}

var pizzas4 = ingredientes(pizzas);
