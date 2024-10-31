// Selección del botón y el menú
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

// Evento para alternar la visibilidad del menú
menuButton.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
// Función para cambiar el idiomaç
function changeLanguage(lang) {
    alert('Idioma cambiado a: ' + lang);
    }

    // Mostrar/ocultar opciones de idioma al hacer clic en el botón
    document.getElementById("language-button").addEventListener("click", function() {
        const options = document.getElementById("language-options");
        options.classList.toggle("hidden");
    });
// scripts.js
function toggleMenu() {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    // Alterna la clase "active" en el botón del menú
    menuButton.classList.toggle("active");

    // Alterna la clase "show" en el menú para controlar su despliegue y ocultamiento
    menu.classList.toggle("show");
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);