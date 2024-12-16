// Referencias a elementos HTML
const cartList = document.querySelector('.list-group');
const totalDisplay = document.querySelector('.badge-success');

// Cargar el carrito desde el Local Storage
const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
};

// Renderizar el carrito
const renderConfirmationCart = () => {
    const cart = loadCartFromLocalStorage();

    // Limpiar la lista actual
    cartList.innerHTML = '';

    if (cart.length === 0) {
        cartList.innerHTML = '<li class="list-group-item text-center">El carrito está vacío.</li>';
        totalDisplay.textContent = '0';
        return;
    }

    // Crear elementos para cada producto
    let total = 0;
    cart.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            ${product.name}
            <div>
                <span class="badge badge-primary">$${(product.price * product.quantity).toFixed(2)}</span>
            </div>
        `;
        cartList.appendChild(listItem);
        total += product.price * product.quantity;
    });

    // Actualizar el total
    totalDisplay.textContent = total.toFixed(2);
};

// Renderizar el carrito al cargar la página
renderConfirmationCart();
