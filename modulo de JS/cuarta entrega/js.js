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
