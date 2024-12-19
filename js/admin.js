// Manejo del inicio de sesión
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulación de verificación de credenciales
    if (email === "admin@gmail.com" && password === "admin") { // CUENTA ADMINISTRADOR
        localStorage.setItem('isAdmin', 'true'); // Guardar como administrador
        alert('¡Inicio de sesión exitoso como administrador!');
        window.location.href = "index.html"; // Redirigir a la página de inicio
    } else { 
        localStorage.setItem('isAdmin', 'false'); // Guardar como usuario normal
        alert('Inicio de sesión exitoso. ¡Bienvenidx a GeekStation!.');
        window.location.href = "productos.html"; // Redirigir a la página de inicio
    }
});
