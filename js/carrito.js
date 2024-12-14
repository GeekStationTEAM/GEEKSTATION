 // Productos disponibles
 const products = [
    { id: 1, name: "Laptop Acer Aspire 3", category: "Laptops", price: 8700, image:"./src/img/productos/img_Andy/ACER3.jpg" },
    { id: 2, name: "Laptop ASUS VivoBook 5", category: "Laptops", price: 8600, image: "./src/img/productos/img_Andy/ASUS3.jpg"},
    { id: 3, name: "Laptop DELL Inspiron 15", category: "Laptops", price: 8499, image: "./src/img/productos/img_Andy/DELL2.jpg"},
    { id: 4, name: "Laptop HP Pavilion x360", category: "Laptops", price: 10999, image: "./src/img/productos/img_Andy/HP3.jpg" },
    { id: 5, name: "Lenovo IdeaPad 3", category: "Laptops", price: 7000, image: "./src/img/productos/img_Andy/LENOVO2.jpg" },
    { id: 6, name: "PC Gamer", category: "Computadoras", price: 25000, image: "./src/img/productos/img_Jluis/HP_AllInOne.png" },
];


// Referencias a HTML
const productList = document.getElementById("product-list");
const cartTable = document.getElementById("items");
const totalDisplay = document.getElementById("total");
const emptyCartBtn = document.getElementById("vaciar-carrito");

let cart = []; // Carrito vacío

// Función para renderizar la lista de productos
const renderProducts = () => {
    productList.innerHTML = "";
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "col-md-4 mb-3";
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.category}</p>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" data-id="${product.id}">Agregar al carrito</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
};

// Función para renderizar productos en el carrito
const renderCart = () => {
    cartTable.innerHTML = "";

    if (cart.length === 0) {
        cartTable.innerHTML = `<tr><td colspan="4" class="text-center">El carrito está vacío.</td></tr>`;
        totalDisplay.textContent = "0";
        return;
    }

    cart.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>
                <button class="btn btn-sm btn-danger" data-id="${product.id}" data-action="decrease">-</button>
                ${product.quantity}
                <button class="btn btn-sm btn-success" data-id="${product.id}" data-action="increase">+</button>
            </td>
            <td>$${(product.price * product.quantity).toFixed(2)}</td>
        `;
        cartTable.appendChild(row);
    });

    calculaTotal();
};

// Función para calcular el total del carrito
const calculaTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalDisplay.textContent = total.toFixed(2);
};

// Función para agregar un producto al carrito
const addToCart = (id) => {
    const product = products.find((p) => p.id === id);
    const existingProduct = cart.find((p) => p.id === id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCart();
};

// Función para manejar las acciones del carrito (incrementar/disminuir cantidad)
const cartActions = (e) => {
    const button = e.target.closest("button");
    if (!button) return;

    const id = parseInt(button.dataset.id);
    const action = button.dataset.action;

    const product = cart.find((item) => item.id === id);

    if (action === "increase") {
        product.quantity++;
    } else if (action === "decrease") {
        product.quantity--;
        if (product.quantity === 0) {
            cart = cart.filter((item) => item.id !== id);
        }
    }

    renderCart();
};

// Vaciar el carrito
const emptyCart = () => {
    cart = [];
    renderCart();
};

// Eventos
productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-primary")) {
        const id = parseInt(e.target.dataset.id);
        addToCart(id);
    }
});

cartTable.addEventListener("click", cartActions);
emptyCartBtn.addEventListener("click", emptyCart);

// Renderiza los productos y carrito inicial
renderProducts();
renderCart();
