const shopcontent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalcontainer = document.getElementById("modal-container");

let carrito = [];

products.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.cardimg}">
    <h3>${product.name}</h3>
    <p class="price">${product.precio} $</p> 
    `;
  shopcontent.append(content);

  let Comprar = document.createElement("button");
  Comprar.innerText = "comprar";
  Comprar.className = "comprar";

  content.append(Comprar);

  Comprar.addEventListener("click", () => {
    carrito.push({
      id: product.id,
      cardimg: product.cardimg,
      name: product.name,
      precio: product.precio,
    });
    console.log(carrito);
  });
});

verCarrito.addEventListener("click", () => {
  const modalheader = document.createElement("div");
  modalheader.className = "modal-header";
  modalheader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
  modalcontainer.append(modalheader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "X";
  modalbutton.className = "modal-header-button";

  modalheader.append(modalbutton);

  carrito.forEach((product) => {
    let carritocontent = document.createElement("div");
    carritocontent.className = "modal-content";
    carritocontent.innerHTML = `
        <img src="${product.cardimg}">
        <h3>${product.name}</h3>
        <p>${product.precio} $</p>
    `;

    modalcontainer.append(carritocontent);

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalbuying = document.createElement("div");
    totalbuying.className = "total-content";
    totalbuying.innerHTML = `Total a pagar: ${total} $`;
    modalcontainer.append(totalbuying);
  });
});
