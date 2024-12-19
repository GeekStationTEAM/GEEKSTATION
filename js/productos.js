// LISTA DE PRODUCTOS CON SUS CATEGORIAS
const products = [
    { id: 1, name: "Laptop Acer Aspire 3", category: "Laptops", price: "$8,700.00 MXN", img:"./src/img/productos/img_Andy/ACER2.jpg" },
    { id: 2, name: "Laptop ASUS VivoBook 5", category: "Laptops", price: "$8,600.00 MXN", img: "./src/img/productos/img_Andy/ASUS3.jpg" },
    { id: 3, name: "Laptop DELL Inspiron 15", category: "Laptops", price: "$8,499.00 MXN", img: "./src/img/productos/img_Andy/DELL2.jpg" },
    { id: 4, name: "Laptop HP Pavilion x360", category: "Laptops", price: "$10,999.00 MXN", img: "./src/img/productos/img_Andy/HP3.jpg" },
    { id: 5, name: "Lenovo IdeaPad 3 RAM 256 GB. Intel Core i3", category: "Laptops", price: "$7,000.00 MXN", img: "./src/img/productos/img_Andy/LENOVO2.jpg" },
    { id: 6, name: "Infinix Note 40 pro Dual Sim", category: "Smartphones", price: "$4,500.00 MXN", img: "./src/img/productos/img_Eli/INFINIX.jpeg" },
    { id: 7, name: "OPPO Reno 11 5G Dual SIM", category: "Smartphones", price: "$7,000.00 MXN", img: "./src/img/productos/img_Eli/OPPO.jpeg" },
    { id: 8, name: "Motorola Edge 50 Fusión", category: "Smartphones", price: "$7,500.00 MXN", img: "./src/img/productos/img_Eli/MOTOROLA.jpeg" },
    { id: 9, name: "Xiaomi Redmi Note 13 pro+ 5G Dual SIM", category: "Smartphones", price: "$6,900.00 MXN", img: "./src/img/productos/img_Eli/REDMI.jpeg" },
<<<<<<< HEAD
    { id: 10, name: "Xiaomi Poco F6 Pro 5G", category: "Smartphones", price: "$2,899.00 MXN", img: "./src/img/productos/img_Eli/POCCO.jpeg" },
    { id: 11, name: "Garmin Forerunner 165", category: "Smartwatch", price: "$9,500.00 MXN", img: "./src/img/productos/img_Gera/garmin165_2.jpg" },
=======
    { id: 10, name: "Xiaomi Poco F6 Pro 5G ", category: "Smartphones", price: "$9,500.00 MXN", img: "./src/img/productos/img_Eli/POCCO.jpeg" },
    { id: 11, name: "Garmin Forerunner 165", category: "Smartwatch", price: "$2,899.00 MXN", img: "./src/img/productos/img_Gera/garmin165_2.jpg" },,
>>>>>>> dev_Eli
    { id: 12, name: "Huawei Band 9", category: "Smartwatch", price: "$609.00 MXN", img: "./src/img/productos/img_Gera/huaweiband9_1.jpg" },
    { id: 13, name: "Xiaomi 9", category: "Smartwatch", price: "$760.00 MXN", img: "./src/img/productos/img_Gera/xiaomi9_1.jpg" },
    { id: 14, name: "Pico 4 VR", category: "Smartwatch", price: "$7,999.00 MXN", img: "./src/img/productos/img_Gera/pico4_2.jpg" },
    { id: 15, name: "Zaklu porta gafas VR", category: "Smartwatch", price: "$309.00 MXN", img: "./src/img/productos/img_Gera/zakulu_2.jpg" },
    { id: 16, name: "Audífonos Sony MDR-ZX110", category: "Audifonos", price: "$344.00 MXN", img: "./src/img/productos/img_Cyn/AudifonosSony.avif" },
    { id: 17, name: "Xiaomi Audífonos in Ear Inalámbricos Buds 6 Play", category: "Audifonos", price: "$699.30 MXN", img: "./src/img/productos/img_Cyn/xiaomiAudifonos.jpg" },
    { id: 18, name: "Cable HDMI 10K 8K 4K 2 Metros Ultra Alta Velocidad", category: "Cables", price: "$249.00 MXN", img: "./src/img/productos/img_Cyn/hdmiCable.jpg" },
    { id: 19, name: "UGREEN Cable USB C", category: "Cables", price: "$184.00 MXN", img: "./src/img/productos/img_Cyn/CableUSBC.jpg" },
    { id: 20, name: "Cámara Web HD 1080P con micrófono y cable USB", category: "Webcam", price: "$206.00 MXN", img: "./src/img/productos/img_Arezbi/camara.jpeg" },
    { id: 21, name: "Teclado Inalámbrico portátil Ultradelgado Xukinroy", category: "Teclados", price: "$185.00 MXN", img: "./src/img/productos/img_Arezbi/teclado2.jpg" },
    { id: 22, name: "Corsair K100 RBG", category: "Teclados", price: "$220.00 MXN", img: "./src/img/productos/img_Arezbi/tecladoColors.jpg" },
    { id: 24, name: "Mouse inalambrico vertical recargable", category: "Mouse", price: "$125.00 MXN", img: "./src/img/productos/img_Arezbi/mouse_vertical.webp" },
    { id: 25, name: "Mouse inalambrico Logitech", category: "Mouse", price: "$58.00 MXN", img: "./src/img/productos/img_Arezbi/mouse1.jpg" },
    { id: 26, name: "Lenovo sff m710S i5-7500 ThinkCentre ", category: "Computadoras", price: "$5,799.00 MXN", img: "./src/img/productos/img_Jluis/Lenovo_sff_m710S_i5-7500.png" },
    { id: 27, name: "PC Lenovo sff m79 AMD A8 4GB y 500GB HDD Con Monitor de 19p ThinkCentre Clase A", category: "Computadoras", price: "$6,899.00 MXN", img: "./src/img/productos/img_Jluis/Lenovo_sff_m710S_i5-7500.png" },
    //{ id: 28, name: "Lenovo WORKSTATION P520 XEON 1TB SSD +3TB HDD 16GB RAM thinkstation P520", category: "Computadoras", price: "$11,399.00 MXN", img: "./src/img/productos/img_Jluis/Lenovo2_ThinkStation_P340_2.png" },
    //{ id: 29, name: "Lenovo Tiny Lenovo M720Q i3-9 8 GB en RAM y 240 GB SSD con LCD de 19 pulgadas ThinkCentre", category: "Computadoras", price: "$$7,499.00 MXN", img: "./src/img/productos/img_JLuis/Lenovo3_Tiny_Lenovo_M720Q.png" },
    { id: 30, name: "All In One HP Intel Celeron-N100", category: "Computadoras", price: "$6,899.00 MXN", img: "./src/img/productos/img_Jluis/HP_AllInOne.png" },
    { id: 31, name: "HP 800 G2 SFF-Core i5-6ta gen-8GB RAM, 500 GB HDD", category: "Computadoras", price: "$5,999.00 MXN", img: "./src/img/productos/img_Jluis/HP1_800_G2_SFF-Corei5.png" },
    { id: 32, name: "HP i5 USFF 4 GB RAM 250 GB HD Windows 10", category: "Computadoras", price: "$4,299.00 MXN", img: "./src/img/productos/img_Jluis/HP2_T640_Ryzen.png" },
    //{ id: 33, name: "HP i5 G420, hasta 32 GB de RAM, SSD 3 TB, Windows 11", category: "Computadoras", price: "$6,799 MXN", img:"./src/img/productos/img_Jluis/HP3_Desktop_1.png" },
    { id: 34, name: "Dell OPTIPLEX Intel Core i5 RAM 8GB SSD 240GB Monitor 23.8", category: "Computadoras", price: "$8,899.00 MXN", img: "./src/img/productos/img_Jluis/Dell2_OPTIPLEX_3070Inteli5-9500.png" },
    { id: 35, name: "Dell Optiplex Intel i5-420 RAM 4GB SSD 480GB monitor 19.5", category: "Computadoras", price: "$8,399.00 MXN", img: "./src/img/productos/img_Jluis/DELL3_OPTIPLEX_SFF_3080_INTELCORE-I5-10500T.png" },
    { id: 36, name: "Dell OPTIPLEX 3070 Intel i5-9500 3.00GHz 16GB y 512 GB SSD", category: "Computadoras", price: "$5,799.00 MXN", img: "./src/img/productos/img_Jluis/Dell1_Optiplex_Intelcorei5.png" },
    { id: 37, name: "Dell OPTIPLEX SFF 3080 Intel I5-10500T 32GB DE RAM Y 512GB SSD+500GB", category: "Computadoras", price: "$5,799.00 MXN", img: "./src/img/productos/img_Jluis/DELL_OPTIPLEX.png" },
    { id: 38, name: "HP Victus 15", category: "Laptops", price: "$17,000.00 MXN", img: "./src/img/productos/img_Mariana/HPVictus1.webp" },
    { id: 39, name: "Dell Inspiron 14", category: "Laptops", price: "$15,500.00 MXN", img: "./src/img/productos/img_Mariana/Dell_Inspiron1.webp" },
    { id: 40, name: "Lenovo IdeaPad 3 Intel Core i5, RAM 512GB", category: "Laptops", price: "$9,990.00 MXN", img: "./src/img/productos/img_Mariana/LenovoIdeaPad1.webp" },
    { id: 41, name: "Acer Chromebook Spin 713", category: "Laptops", price: "$14,000.00 MXN", img: "./src/img/productos/img_Mariana/AcerChromebook3.webp" },
    { id: 42, name: "MacBook Air M1", category: "Laptops", price: "$17,990.00 MXN",img: "./src/img/productos/img_Mariana/MacBook1.avif" },
    { id: 43, name: "Samsung Galaxy S23", category: "Smartphones", price: "$22,500.00 MXN", img: "./src/img/productos/img_Mariana/Samsung1.jpg" },
    { id: 44, name: "iPhone 15 Pro", category: "Smartphones", price: "$28,000.00 MXN", img: "./src/img/productos/img_Mariana/iPhone1.jpg" },
    { id: 45, name: "Xiaomi 13 Lite", category: "Smartphones", price: "$12,500.00 MXN", img: "./src/img/productos/img_Mariana/Xiaomi2.jpg" },
    { id: 46, name: "Motorola Edge 40", category: "Smartphones", price: "$15,990.00 MXN", img: "./src/img/productos/img_Mariana/Motorola1.jpg" },
    { id: 47, name: "Google Pixel 8", category: "Smartphones", price: "$19,000.00 MXN", img: "./src/img/productos/img_Mariana/GooglePixel1.jpg" },
    { id: 48, name: "iPad Pro 11” M2", category: "Tablets", price: "$20,999.00 MXN", img: "./src/img/productos/img_Mariana/iPad1.jpg" },
    { id: 49, name: "Samsung Galaxy Tab S9", category: "Tablets", price: "$19,000.00 MXN", img: "./src/img/productos/img_Mariana/SamsungTab2.jpg" },
    { id: 50, name: "Xiaomi Pad 6", category: "Tablets", price: "$8,000.00 MXN", img: "./src/img/productos/img_Mariana/XiaomiPad1.jpg" },
    { id: 51, name: "Lenovo Tab P11 Pro", category: "Tablets", price: "$9,500.00 MXN", img: "./src/img/productos/img_Mariana/LenovoTab2.jpg" },
    { id: 52, name: "Amazon Fire HD 10", category: "Tablets", price: "$4,500.00 MXN", img: "./src/img/productos/img_Mariana/AmazonF1.jpg" },    
    // ... Más productos aquí
];

// DETERMINAR ROL DEL USUARIO
const isAdmin = JSON.parse(localStorage.getItem("isAdmin")) || false;

// RENDERIZAR PRODUCTOS
function renderProducts(filter = "all") {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Limpia el contenido previo

    const filteredProducts = filter === "all" ? products : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement("article");
        productCard.classList.add("product-card");

        const adminButtons = isAdmin
            ? `
            <button class="btn btn-warning" onclick="editProduct(${product.id})">Editar</button>
            <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Eliminar</button>
            `
            : "";

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button class="btn btn-primary" onclick="redirectToCart(${product.id})">Agregar al carrito</button>
            ${adminButtons}
        `;

        productGrid.appendChild(productCard); // Agrega el producto al contenedor
    });
}


// ELIMINAR UN PRODUCTO
function deleteProduct(productId) {
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        renderProducts(); // Actualiza la lista
    } else {
        console.error("Producto no encontrado con id:", productId);
    }
}

// EDITAR UN PRODUCTO
function editProduct(productId) {
    alert(`Editar producto con ID: ${productId}`);
    // Implementa la lógica de edición
}

// ELIMINAR TODOS LOS PRODUCTOS
function clearAllProducts() {
    if (confirm("¿Estás seguro de que deseas eliminar todos los productos?")) {
        products.length = 0;
        renderProducts();
    }
}

// REDIRIGIR AL CARRITO
function redirectToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("Producto no encontrado con ID:", productId);
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "carrito.html"; // Asegúrate de que la URL sea correcta
}

// FILTRAR PRODUCTOS
document.getElementById("category-filter").addEventListener("change", event => {
    renderProducts(event.target.value);
});

// CARGAR PRODUCTOS AL INICIAR
window.onload = () => {
    renderProducts();

    // Mostrar botón de eliminar todo solo si es administrador
    const deleteAllProductsBtn = document.getElementById("delete-all-products-btn");
    if (isAdmin && deleteAllProductsBtn) {
        deleteAllProductsBtn.classList.remove("d-none");
    }
};










/* FUNCIONES REDUNDANTES 
// FUNCION PARA RENDERIZAR LOS PRODUCTOS
function renderProducts(filter = "all") {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";  // Limpiar los productos actuales

    const filteredProducts = filter === "all" ? products : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement("article");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button onclick = "redirectToCart()"> Agregar al carrito</button>
             <button onclick = "deleteProduct(${product.id})">Borrar</button>
        `;
//            <button onclick = "editProductAndRedirect(${product.id})">Editar</button> ---DORMI BOTON QUE REDIRECCIONABA A REGISTRO PRODUCTO ADMIN
        productGrid.appendChild(productCard);
    });
}

// CARGAR PRODUCTOS A LA PÁGINA
    window.onload = () => {
        renderProducts();
    };


// FILTRAR PRODUCTOS CUANDO CAMBIE EL SELECT
    document.getElementById("category-filter").addEventListener("change", (event) => {
        renderProducts(event.target.value);
    });


//MODIFICAR PRODUCTOS
function updateProduct (id, newName, newPrice, newCategory, newImg){
    const product =products.find (p => p.id === id); //Busca el producto por id
    if (product){
        product.name = newName || product.name; //Si cambia el nombre se actualiza 
        product.price = newPrice || product.price; // Si cambia el precio debe actualizar
        product.category = newCategory || product.category; // Actualiza la categoría 
        product.img = newImg || product.img; // Por si cambia la imagen

    }

    renderProducts(); //renderiza de nuevo los productos
    }
function editProductAndRedirect(productId) {
    window.location.href = `registroProducto.html?id=${productId}`;
}


//ELIMINAR UN PRODUCTO
function deleteProduct(id){
    const productIndex = products.filter (p => p.id !== undefined).findIndex(p => p.id === id); //busca el índice del producto
    if (productIndex !== -1){
        products.splice(productIndex, 1); //elimina el producto del arreglo 
    } else{
        console.error("Producto no encontrado con id", id); //verificar que el id esté en el arreglo
    }

    renderProducts(); // renderiza otra vez los productos
    }

//ELIMINAR TODOS LOS PRODUCTOS
function clearAllProducts(){
    products.length = 0; // vacía el arreglo
    renderProducts(); //renderiza otra vez 
    }


//AGREGAR AL CARRITO
function redirectToCart() {
    window.location.href = 'carrito.html';
    }                                                    

  // Variable para definir si el usuario es administrador
//const isAdmin = true; // Cambia a false para probar como usuario regular

const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));

// FUNCION PARA RENDERIZAR LOS PRODUCTOS
function renderProducts(filter = "all") {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Limpiar los productos actuales

    const filteredProducts = filter === "all" ? products : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement("article");
        productCard.classList.add("product-card");

        // Botones condicionales para el administrador
        const adminButtons = isAdmin
            ? `
            <button onclick="editProductAndRedirect(${product.id})">Editar</button>
            <button onclick="deleteProduct(${product.id})">Borrar</button>
            `
            : "";

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button onclick="redirectToCart()">Agregar al carrito</button>
            ${adminButtons}
        `;

        productGrid.appendChild(productCard);
     });
}

// Simula si el usuario es administrador. 


document.addEventListener("DOMContentLoaded", () => {
    const deleteAllProductsBtn = document.getElementById("delete-all-products-btn");

    // Muestra el botón solo si el usuario es administrador
    if (isAdmin) {
        deleteAllProductsBtn.classList.remove("d-none");
        }
    });



// CARGAR PRODUCTOS AL CARGAR LA PAGINA Cargar productos al cargar la página
window.onload = () => {
    renderProducts();
};

// FILTRAR PRODUCTOS CUANDO CAMBIE EL SELECT
document.getElementById("category-filter").addEventListener("change", (event) => {
    renderProducts(event.target.value);
});

// Verificar si el usuario es administrador
// Esta función se ejecuta al cargar la página

document.addEventListener("DOMContentLoaded", function () {
    const isAdmin = localStorage.getItem("isAdmin") === "true"; // Obtener el estado del usuario administrador

    if (isAdmin) {
        // Mostrar botón para eliminar todos los productos
        const deleteAllBtn = document.getElementById("delete-all-products-btn");
        if (deleteAllBtn) {
            deleteAllBtn.classList.remove("d-none");
        }

        // Mostrar controles de administrador en cada producto
        const productGrid = document.getElementById("product-grid");
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product-item");

            // Crear la estructura del producto
            productElement.innerHTML = `
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <div class="admin-controls d-none">
                            <button class="btn btn-warning" onclick="editProduct(${product.id})">Editar</button>
                            <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Eliminar</button>
                        </div>
                    </div>
                </div>
            `;

            // Mostrar controles de administrador si el usuario es administrador
            if (isAdmin) {
                const adminControls = productElement.querySelector(".admin-controls");
                if (adminControls) {
                    adminControls.classList.remove("d-none");
                }
            }

            productGrid.appendChild(productElement);
        });
    //} else {
        //alert("Acceso restringido. Inicia sesión como administrador para gestionar los productos.");
    }
});

// FUNCION PARA ELIMINAR TODOS LOS PRODUCTOS
function clearAllProducts() {
    if (confirm("¿Estás seguro de que deseas eliminar todos los productos?")) {
        document.getElementById("product-grid").innerHTML = ""; // Limpiar la vista de productos
        alert("Todos los productos han sido eliminados.");
    }
}

// FUNCION PARA EDITAR UN PRODUCTO (PUEDES IMPLEMENTARLA SEGUN TUS NECESIDADES)
function editProduct(productId) {
    alert(`Editar producto con ID: ${productId}`);
    // Implementa la lógica de edición aquí
}

// FUNCION PARA ELIMINAR UN PRODUCTO ESPECIFICO
function deleteProduct(productId) {
    if (confirm(`¿Estás seguro de que deseas eliminar el producto con ID: ${productId}?`)) {
        const productGrid = document.getElementById("product-grid");
        const productElement = productGrid.querySelector(`.product-item:nth-child(${productId})`);
        if (productElement) {
            productGrid.removeChild(productElement);
            alert(`Producto con ID: ${productId} eliminado.`);
        }
    }
}
*/