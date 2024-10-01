const sliderContainer = document.getElementById("slider-container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const totalSlides = slides.length;

// Función para cambiar al siguiente slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSliderPosition();
}

// Función para cambiar al slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
}

// Función para actualizar la posición del slider
function updateSliderPosition() {
  const offset = currentIndex * -100;
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

// Eventos para los botones
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Slider automático
let autoSlider = setInterval(nextSlide, 3000);

// Pausar el slider automático cuando el usuario interactúa
sliderContainer.addEventListener("mouseenter", () => clearInterval(autoSlider));
sliderContainer.addEventListener(
  "mouseleave",
  () => (autoSlider = setInterval(nextSlide, 3000))
);

// selector
const select = (selector = "") => document.querySelector(selector);
const selectAll = (selector = "") => document.querySelectorAll(selector);
const toggle = (element = "", className = "") =>
  element.classList.toggle(className);
const create = (tag = "", content = "", attributes = {}) => {
  const element = document.createElement(tag);
  element.innerHTML = content;
  Object.keys(attributes).forEach((attr) =>
    element.setAttribute(attr, attributes[attr])
  );
  return element;
};

// data
const carta = [
  {
    id: 1,
    name: "Joystick Argentina",
    precio: 3500,
    cardimg: "assets/joystick arg.jfif",
    category: "accesorios",
  },
  {
    id: 2,
    name: "Mausepad cachondo 100% disfrute",
    precio: 2500,
    cardimg: "assets/mausepad cachondo.jfif",
    category: "accesorios",
  },
  {
    id: 3,
    name: "Microfono",
    precio: 2700,
    cardimg: "assets/microfono.jfif",
    category: "accesorios",
  },
  {
    id: 4,
    name: "Monitor",
    precio: 3200,
    cardimg: "assets/monitor.webp",
    category: "accesorios",
  },
  {
    id: 5,
    name: "PS5 Spiderman",
    precio: 38000,
    cardimg: "assets/ps5 - spiderman.webp",
    category: "consolas",
  },
  {
    id: 6,
    name: "Auriculares Fantastic",
    precio: 4000,
    cardimg: "assets/auris.png",
    category: "accesorios",
  },
  {
    id: 7,
    name: "Silla Gamer",
    precio: 2200,
    cardimg: "assets/silla gamer.jfif",
    category: "accesorios",
  },
  {
    id: 8,
    name: "Teclado Gamer",
    precio: 3000,
    cardimg: "assets/teclado.jfif",
    category: "accesorios",
  },
  {
    id: 9,
    name: "FC24",
    precio: 24000,
    cardimg: "assets/fulbo.jpg",
    category: "juegos",
  },
  {
    id: 10,
    name: "Fortnite",
    precio: "0",
    cardimg: "assets/fortnite.jpg",
    category: "juegos",
  },
  {
    id: 11,
    name: "Slime Rancher",
    precio: 5000,
    cardimg: "assets/slime.jpg",
    category: "juegos",
  },
  {
    id: 12,
    name: "The Witcher III",
    precio: 9000,
    cardimg: "assets/wicher.jpg",
    category: "juegos",
  },
  {
    id: 13,
    name: "PS4",
    precio: 25000,
    cardimg: "assets/play 4.jpg",
    category: "consolas",
  },
  {
    id: 14,
    name: "PS3",
    precio: 10000,
    cardimg: "assets/ps3.jfif",
    category: "consolas",
  },
  {
    id: 15,
    name: "Joystick Bokita",
    precio: 6000,
    cardimg: "assets/joystick bokita.jfif",
    category: "accesorios",
  },
];

// paja
const content = document.getElementById("list");
const juegos = document.getElementById("juegos");
const consolas = document.getElementById("consolas");
const accesorios = document.getElementById("accesorios");

const products = (filteredproducts) => {
  content.innerHTML = "";
  filteredproducts.forEach((producto) => {
    const productcard = document.createElement("div");
    productcard.className = "card-products";
    productcard.dataset.id = producto.id;
    productcard.innerHTML = `
      <img src="${producto.cardimg}" alt="${producto.name}">
      <h3>${producto.name}</h3>
      <p>Precio: $${producto.precio}</p>
      <button class="addCart">Añadir al carrito</button>
    `;
    content.append(productcard);
  });
};

products(carta);

const filtro = (category) => {
  const filteredproducts = carta.filter(
    (product) => product.category === category
  );
  products(filteredproducts);
};

let lastCategory = null;

const setupFilter = (button, category) => {
  button.addEventListener("click", () => {
    if (lastCategory === category) {
      products(carta);
      lastCategory = null;
    } else {
      filtro(category);
      lastCategory = category;
    }
  });
};

setupFilter(juegos, "juegos");
setupFilter(consolas, "consolas");
setupFilter(accesorios, "accesorios");
