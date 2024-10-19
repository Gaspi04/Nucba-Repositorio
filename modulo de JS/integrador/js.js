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
sliderContainer.addEventListener("mouseleave", () => {
  autoSlider = setInterval(nextSlide, 3000);
});

// Selector genérico
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

// Menu desplegable
const body = document.body;
const _items = select("#_items");
const _toggle = select("#_toggle");

// Función para alternar el menú
const toggleMenu = () => {
  _items.classList.toggle("open");
  _toggle.classList.toggle("close");
};

// Cerrar el menú al hacer scroll
window.addEventListener("scroll", () => {
  if (_items.classList.contains("open")) {
    toggleMenu();
  }
});

// Evento del toggle
_toggle.addEventListener("click", toggleMenu);

// Cerrar el menú al hacer scroll
window.addEventListener("scroll", () => {
  if (_items.classList.contains("open")) {
    toggleMenu();
  }
});

