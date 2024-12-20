
const products = [
  { id: 1, name: "Laptop Acer Aspire 3", category: "Laptops", price: 8700, image: "./src/img/productos/img_Andy/ACER3.jpg" },
  { id: 2, name: "Laptop ASUS VivoBook 5", category: "Laptops", price: 8600, image: "./src/img/productos/img_Andy/ASUS3.jpg" },
  { id: 3, name: "Laptop DELL Inspiron 15", category: "Laptops", price: 8499, image: "./src/img/productos/img_Andy/DELL2.jpg" },
  { id: 4, name: "Laptop HP Pavilion x360", category: "Laptops", price: 10999, image: "./src/img/productos/img_Andy/HP3.jpg" },
  { id: 5, name: "Lenovo IdeaPad 3", category: "Laptops", price: 7000, image: "./src/img/productos/img_Andy/LENOVO2.jpg" },
  { id: 6, name: "PC Gamer", category: "Computadoras", price: 25000, image: "./src/img/productos/img_Eli/INFINIX.jpeg" },
  { id: 7, name: "OPPO Reno 11 5G Dual SIM", category: "Smartphones", price: 7000, image: "./src/img/productos/img_Eli/OPPO.jpeg" },
  { id: 8, name: "Motorola Edge 50 Fusión", category: "Smartphones", price: 7500, image: "./src/img/productos/img_Eli/MOTOROLA.jpeg" },
  { id: 9, name: "Xiaomi Redmi Note 13 pro+ 5G Dual SIM", category: "Smartphones", price: 6900, image: "./src/img/productos/img_Eli/REDMI.jpeg" },
  { id: 10, name: "Xiaomi Poco F6 Pro 5G ", category: "Smartphones", price:2899, image: "./src/img/productos/img_Eli/POCCO.jpeg" },
  { id: 11, name: "Garmin Forerunner 165", category: "Smartwatch", price: 9500, image: "./src/img/productos/img_Gera/garmin165_2.jpg" },
  { id: 12, name: "Huawei Band 9", category: "Smartwatch", price: 609, image: "./src/img/productos/img_Gera/huaweiband9_1.jpg" },
  { id: 13, name: "Xiaomi 9", category: "Smartwatch", price: 760, image: "./src/img/productos/img_Gera/xiaomi9_1.jpg" },
  { id: 14, name: "Pico 4 VR", category: "Smartwatch", price: 7999, image: "./src/img/productos/img_Gera/pico4_2.jpg" },
  { id: 15, name: "Zaklu porta gafas VR", category: "Smartwatch", price: 309, image: "./src/img/productos/img_Gera/zakulu_2.jpg" },
  { id: 16, name: "Audífonos Sony MDR-ZX110", category: "Audifonos", price: 344, image: "./src/img/productos/img_Cyn/AudifonosSony.avif" },
  { id: 17, name: "Xiaomi Audífonos in Ear Inalámbricos Buds 6 Play", category: "Audifonos", price:699, image: "./src/img/productos/img_Cyn/xiaomiAudifonos.jpg" },
  { id: 18, name: "Cable HDMI 10K 8K 4K 2 Metros Ultra Alta Velocidad", category: "Cables", price: 249, image: "./src/img/productos/img_Cyn/hdmiCable.jpg" },
  { id: 19, name: "UGREEN Cable USB C", category: "Cables", price: 184, image: "./src/img/productos/img_Cyn/CableUSBC.jpg" },
  { id: 20, name: "Cámara Web HD 1080P con micrófono y cable USB", category: "Webcam", price: 206, image: "./src/img/productos/img_Arezbi/camara.jpeg" },
  { id: 21, name: "Teclado Inalámbrico portátil Ultradelgado Xukinroy", category: "Teclados", price: 185, image: "./src/img/productos/img_Arezbi/teclado2.jpg" },
  { id: 22, name: "Corsair K100 RBG", category: "Teclados", price: 220, image: "./src/img/productos/img_Arezbi/tecladoColors.jpg" },
  { id: 24, name: "Mouse inalambrico vertical recargable", category: "Mouse", price: 125, image: "./src/img/productos/img_Arezbi/mouse_vertical.webp" },
  { id: 25, name: "Mouse inalambrico Logitech", category: "Mouse", price: 58, image: "./src/img/productos/img_Arezbi/mouse1.jpg" },
  { id: 26, name: "Lenovo sff m710S i5-7500 ThinkCentre ", category: "Computadoras", price: 5599, image: "./src/img/productos/img_Jluis/Lenovo_sff_m710S_i5-7500.png" },
  { id: 27, name: "PC Lenovo sff m79 AMD A8 4GB y 500GB HDD Con Monitor de 19p ThinkCentre Clase A", category: "Computadoras", price: 6899, image: "./src/img/productos/img_Jluis/Lenovo_sff_m710S_i5-7500.png" },
  //{ id: 28, name: "Lenovo WORKSTATION P520 XEON 1TB SSD +3TB HDD 16GB RAM thinkstation P520", category: "Computadoras", price: "$11,399 MXN", img: "./src/img/productos/img_Jluis/Lenovo2_ThinkStation_P340_2.png" },
  //{ id: 29, name: "Lenovo Tiny Lenovo M720Q i3-9 8 GB en RAM y 240 GB SSD con LCD de 19 pulgadas ThinkCentre", category: "Computadoras", price: 7499, image: "./src/img/productos/img_JLuis/Lenovo3_Tiny_Lenovo_M720Q.png" },
  { id: 30, name: "All In One HP Intel Celeron-N100", category: "Computadoras", price: 6899, image: "./src/img/productos/img_Jluis/HP_AllInOne.png" },
  { id: 31, name: "HP 800 G2 SFF-Core i5-6ta gen-8GB RAM, 500 GB HDD", category: "Computadoras", price: 5999, image: "./src/img/productos/img_Jluis/HP1_800_G2_SFF-Corei5.png" },
  { id: 32, name: "HP i5 USFF 4 GB RAM 250 GB HD Windows 10", category: "Computadoras", price: 4299, image: "./src/img/productos/img_Jluis/HP2_T640_Ryzen.png" },
 // { id: 33, name: "HP i5 G420, hasta 32 GB de RAM, SSD 3 TB, Windows 11", category: "Computadoras", price: "$6,799 MXN", img:"./src/img/productos/img_Jluis/HP3_Desktop_1.png" },
  { id: 34, name: "Dell OPTIPLEX Intel Core i5 RAM 8GB SSD 240GB Monitor 23.8", category: "Computadoras", price: 8899, image: "./src/img/productos/img_Jluis/Dell2_OPTIPLEX_3070Inteli5-9500.png" },
  { id: 35, name: "Dell Optiplex Intel i5-420 RAM 4GB SSD 480GB monitor 19.5", category: "Computadoras", price: 8399, image: "./src/img/productos/img_Jluis/DELL3_OPTIPLEX_SFF_3080_INTELCORE-I5-10500T.png" },
  { id: 36, name: "Dell OPTIPLEX 3070 Intel i5-9500 3.00GHz 16GB y 512 GB SSD", category: "Computadoras", price: 5799, image: "./src/img/productos/img_Jluis/Dell1_Optiplex_Intelcorei5.png" },
  { id: 37, name: "Dell OPTIPLEX SFF 3080 Intel I5-10500T 32GB DE RAM Y 512GB SSD+500GB", category: "Computadoras", price: 5799, image: "./src/img/productos/img_Jluis/DELL_OPTIPLEX.png" },
  { id: 38, name: "HP Victus 15", category: "Laptops", price: 17000, image: "./src/img/productos/img_Mariana/HPVictus1.webp" },
  { id: 39, name: "Dell Inspiron 14", category: "Laptops", price: 15500, image: "./src/img/productos/img_Mariana/Dell_Inspiron1.webp" },
  { id: 40, name: "Lenovo IdeaPad 3", category: "Laptops", price: 9990, image: "./src/img/productos/img_Mariana/LenovoIdeaPad1.webp" },
  { id: 41, name: "Acer Chromebook Spin 713", category: "Laptops", price: 14000, image: "./src/img/productos/img_Mariana/AcerChromebook3.webp" },
  { id: 42, name: "MacBook Air M1", category: "Laptops", price: 17990,image: "./src/img/productos//img_Mariana/MacBook1.avif" },
  { id: 43, name: "Samsung Galaxy S23", category: "Smartphones", price:22500, image: "./src/img/productos/img_Mariana/Samsung1.jpg" },
  { id: 44, name: "iPhone 15 Pro", category: "Smartphones", price: 2800, image: "./src/img/productos/img_Mariana/iPhone1.jpg" },
  { id: 45, name: "Xiaomi 13 Lite", category: "Smartphones", price: 12500, image: "./src/img/productos/img_Mariana/Xiaomi2.jpg" },
  { id: 46, name: "Motorola Edge 40", category: "Smartphones", price: 15990, image: "./src/img/productos/img_Mariana/Motorola1.jpg" },
  { id: 47, name: "Google Pixel 8", category: "Celulares", price: 19000, image: "./src/img/productos/img_Mariana/GooglePixel1.jpg" },
  { id: 48, name: "iPad Pro 11” M2", category: "Tablets", price: 20999, image: "./src/img/productos/img_Mariana/iPad1.jpg" },
  { id: 49, name: "Samsung Galaxy Tab S9", category: "Tablets", price: 19000, image: "./src/img/productos/img_Mariana/SamsungTab2.jpg" },
  { id: 50, name: "Xiaomi Pad 6", category: "Tablets", price: 8000, image: "./src/img/productos/img_Mariana/XiaomiPad1.jpg" },
  { id: 51, name: "Lenovo Tab P11 Pro", category: "Tablets", price: 9500, image: "./src/img/productos/img_Mariana/LenovoTab2.jpg" },
  { id: 52, name: "Amazon Fire HD 10", category: "Tablets", price: 4500, image: "./src/img/productos/img_Mariana/AmazonF1.jpg" },    
  // ... Más productos aquí
];

// Referencias a HTML
const productList = document.getElementById("product-grid");
const cartTable = document.getElementById("items");
const totalDisplay = document.getElementById("total");
const emptyCartBtn = document.getElementById("vaciar-carrito");

let cart = []; // Carrito vacío

// Función para renderizar la lista de productos
const renderProducts = (filter = "all") => {

    const productList = document.getElementById("product-grid");
    productList.innerHTML = "";

    const filteredProducts = filter === "all" ? products : products.filter(product => product.category === filter);

    filteredProducts.forEach((product) => {
        const productCard = document.createElement("article");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <div class="card" style="display:grid; margin: auto;">
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


// Cargar productos al cargar la página
window.onload = () => {
    renderProducts();
};

// Filtrar productos cuando cambie el select
document.getElementById("category-filter").addEventListener("change", (event) => {
    renderProducts(event.target.value);
});

// Función para renderizar productos en el carrito
const renderCart = () => {
    cartTable.innerHTML = "";

    if (cart.length === 0) {
        cartTable.innerHTML = `<tr><td colspan="4" class="text-center" >Agrega tus productos al carrito</td></tr>`;
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


// Renderiza los productos y carrito inicial
renderProducts();
renderCart();

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
        window.scroll({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    } else {
        cart.push({ ...product, quantity: 1 });
        window.scroll({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }

    renderCart();
    saveCartToLocalStorage(); // Actualiza el Local Storage


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
    saveCartToLocalStorage(); // Actualiza el Local Storage

};


//FUNCION PARA GUARDAR LOS PRODUCTOS DEL CARRITO EN EL LOCALSTORAGE
const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Vaciar el carrito
const emptyCart = () => {
    cart = [];
    renderCart();
    saveCartToLocalStorage(); // Limpia el Local Storage

};

// Eventos
productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-primary")) {
        const id = parseInt(e.target.dataset.id);
        addToCart(id);
    }
});

// Filtrar productos cuando cambie el select
document.getElementById("category-filter").addEventListener("change", (event) => {
    renderProducts(event.target.value);
});


cartTable.addEventListener("click", cartActions);
emptyCartBtn.addEventListener("click", emptyCart);


