// Datos de productos
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
    precio: 0,
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

// Elementos del DOM
const content = document.getElementById("list");
const juegos = document.getElementById("juegos");
const consolas = document.getElementById("consolas");
const accesorios = document.getElementById("accesorios");
const verCarrito = document.getElementById("verCarrito");
const modalcontainer = document.getElementById("modal-container");

let carrito = [];

// Función para renderizar productos
const products = (filteredProducts) => {
  content.innerHTML = "";
  filteredProducts.forEach((producto) => {
    const productCard = document.createElement("div");
    productCard.className = "card-products";
    productCard.dataset.id = producto.id;
    productCard.innerHTML = `
        <img src="${producto.cardimg}" alt="${producto.name}">
        <h3>${producto.name}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="addCart">Añadir al carrito</button>
      `;
    content.append(productCard);
  });

  // Añadir evento de click a los botones de "Añadir al carrito"
  const addCartButtons = document.querySelectorAll(".addCart");
  addCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.closest(".card-products").dataset.id);
      const product = carta.find((prod) => prod.id === productId);
      if (product) {
        carrito.push(product);
        console.log(carrito);
      }
    });
  });
};

// Inicializar la lista de productos
products(carta);

// Función de filtro de productos
const filtro = (category) => {
  const filteredProducts = carta.filter(
    (product) => product.category === category
  );
  products(filteredProducts);
};

// Gestión del estado del filtro
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

// Mostrar carrito en modal
verCarrito.addEventListener("click", () => {
  modalcontainer.classList.add("active");
  modalcontainer.innerHTML = "";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `<h1 class="modal-header-title">Carrito</h1>`;
  modalcontainer.append(modalHeader);

  const closeModal = document.createElement("h1");
  closeModal.innerText = "X";
  closeModal.className = "modal-header-button";
  closeModal.addEventListener("click", () => {
    modalcontainer.classList.remove("active");
  });
  modalHeader.append(closeModal);

  carrito.forEach((product) => {
    let cartContent = document.createElement("div");
    cartContent.className = "modal-content";
    cartContent.innerHTML = `
        <img src="${product.cardimg}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="product-price">Precio: $${product.precio}</p>
      `;
    modalcontainer.append(cartContent);
  });

  const total = carrito.reduce((sum, product) => sum + product.precio, 0);
  const totalElement = document.createElement("div");
  totalElement.className = "modal-total";
  totalElement.innerHTML = `<h3>Total: $${total}</h3>`;
  modalcontainer.append(totalElement);
});

/// Mostrar productos en el carrito
carrito.forEach((product) => {
  let cartContent = document.createElement("div");
  cartContent.className = "modal-content";
  cartContent.innerHTML = `
        <img src="${product.cardimg}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="product-price">Precio: $${product.precio}</p> <!-- El precio debajo del nombre -->
      `;
  modalcontainer.append(cartContent);
});
// Mostrar total
const total = carrito.reduce((sum, product) => sum + product.precio, 0);
const totalElement = document.createElement("div");
totalElement.className = "modal-total";
totalElement.innerHTML = `<h3>Total: $${total}</h3>`;
modalcontainer.append(totalElement);
// Selecciona el modal
const modalContainer = document.getElementById("modal-container");

// Función para mostrar el modal
document.getElementById("verCarrito").addEventListener("click", function () {
  modalContainer.classList.add("active"); // Muestra el modal
});

// Función para ocultar el modal cuando se hace scroll
function hideModalOnScroll() {
  if (modalContainer.classList.contains("active")) {
    modalContainer.classList.remove("active");
  }
}

// Escucha el evento de scroll
window.addEventListener("scroll", hideModalOnScroll);

// Cerrar el modal al hacer clic fuera de él
modalContainer.addEventListener("click", function (event) {
  if (event.target === modalContainer) {
    modalContainer.classList.remove("active"); // Oculta el modal
  }
});

function addToCart(product) {
  const modalContent = document.getElementById("modal-content");

  // Crear un nuevo elemento para el producto
  const productItem = document.createElement("div");
  productItem.classList.add("modal-item");

  // Agregar el nombre y el precio del producto en formato adecuado
  productItem.innerHTML = `
      <div class="product-info">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-details">
          <h3>${product.name}</h3>
          <p class="product-price">Precio: $${product.price.toFixed(2)}</p>
        </div>
      </div>
    `;

  // Agregar el nuevo elemento al contenido del modal
  modalContent.appendChild(productItem);

  // Actualizar el total
  updateTotal(product.price);
}
