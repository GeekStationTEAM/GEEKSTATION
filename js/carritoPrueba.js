document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsTable = document.getElementById("items");

    function updateCartUI() {
        itemsTable.innerHTML = ""; // Limpia la tabla
        let total = 0;

        cart.forEach((product, index) => {
            const subtotal = parseFloat(product.price.replace(/[^0-9.-]+/g, "")) * product.quantity;
            total += subtotal;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${index}, 'decrease')">-</button>
                        <span id="cantidad-${index}" class="mx-2">${product.quantity}</span>
                        <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${index}, 'increase')">+</button>
                    </div>
                </td>
                <td>$<span id="subtotal-${index}">${subtotal.toFixed(2)}</span></td>
            `;

            itemsTable.appendChild(row);
        });

        document.getElementById("total").textContent = total.toFixed(2);
    }

    window.updateQuantity = (index, action) => {
        if (action === "increase") {
            cart[index].quantity++;
        } else if (action === "decrease") {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                return; // Evita disminuir por debajo de 1
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
     };
/*
    window.updateQuantity = (index, action) => {
        if (action === "increase") {
            cart[index].quantity++;
        } else if (action === "decrease") {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                return; // Evita disminuir por debajo de 1
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
    };
    */

    window.clearCart = () => {
        localStorage.removeItem("cart");
        itemsTable.innerHTML = "";
        document.getElementById("total").textContent = "0.00";
        alert("Tu carrito ha sido vaciado.");
    };

    updateCartUI();
});



function finalizarCompra() {
    window.location.href = "pago.html"; // Redirige a la página de pago.html
}


/*
///////////CARGAR CARRITO Y MOSTRAR LOS PRODUCTOS AL CARGAR LA PAGINA//////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsTable = document.getElementById("items");
    let total = 0;

    cart.forEach(product => {
        const row = document.createElement("tr");
        const subtotal = parseFloat(product.price.replace(/[^0-9.-]+/g,"")) * 1; // Asumiendo una cantidad de 1 para simplificar
        total += subtotal;

        row.innerHTML = `
            <td>${product.name}</td>
            <td>            </td>
            <td>
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('decrease', ${product.id})">-</button>
                    <span id="cantidad-${product.id}" class="mx-2">1</span> <!-- Muestra la cantidad actual -->
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('increase', ${product.id})">+</button>
                </div>
            </td>
            <td>$<span id="subtotal-${product.id}">${subtotal.toFixed(2)}</span></td>
        `;

        itemsTable.appendChild(row);
    });

    document.getElementById("total").textContent = total.toFixed(2);
});



/////////FUNCION LIMPIAR CARRITO///////////////////////////////////////////////////////////////////////////////
function clearCart() {
    // Limpiar el carrito en localStorage
    localStorage.removeItem("cart");
    
    // Limpiar el contenido de la tabla
    const itemsTable = document.getElementById("items");
    itemsTable.innerHTML = ''; // Elimina todas las filas del carrito

    // Actualizar el total a cero
    document.getElementById("total").textContent = '0.00';

    // Opcional: Puedes mostrar un mensaje al usuario
    alert("Tu carrito ha sido vaciado.");
}




*/




























/*
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
}
*/