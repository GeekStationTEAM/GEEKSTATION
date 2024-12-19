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
            <td>Descripción del producto</td>
            <td>
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('decrease', ${product.id})">-</button>
                    <span id="cantidad-${product.id}" class="mx-2">1</span> <!-- Muestra la cantidad actual -->
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('increase', ${product.id})">+</button>
                </div>
            </td>
            <td>$<span id="subtotal-${product.id}">${subtotal.toFixed(2)}</span></td>
            <td><button class="btn btn-danger" onclick="removeProduct(${product.id})">Eliminar</button></td>
        `;

        itemsTable.appendChild(row);
    });

    document.getElementById("total").textContent = total.toFixed(2);
});
