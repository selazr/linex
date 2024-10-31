const carouselImages = document.querySelectorAll('.carousel-image');
const texts = [
    "Materializa tus ideas",
    "Protección y resistencia",
    "Calidad y durabilidad",
    "Innovación en recubrimientos",
    "Satisfacción garantizada",
    "Líderes en el mercado"
]; // Textos que quieres mostrar con cada imagen

let currentCarouselImage = 0;
let autoSlideInterval;
let div = document.querySelector(".text");
let typingTimeout; // Variable para almacenar el timeout de la animación de texto
let isTyping = false; // Variable para verificar si el efecto de escritura está en curso

function showImage(index) {
    carouselImages[currentCarouselImage].classList.remove('active');
    currentCarouselImage = index;
    carouselImages[currentCarouselImage].classList.add('active');
    
    // Reinicia el texto y el efecto de escritura
    div.textContent = ""; // Borra el texto actual
    stopTyping(); // Detén cualquier animación de texto en curso
    efectoTextTyping(div, texts[currentCarouselImage], 0); // Inicia el efecto de escritura con el nuevo texto
}

function showNextImage() {
    const nextIndex = (currentCarouselImage + 1) % carouselImages.length;
    showImage(nextIndex);
}

function showPreviousImage() {
    const prevIndex = (currentCarouselImage - 1 + carouselImages.length) % carouselImages.length;
    showImage(prevIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(showNextImage, 10000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide();

document.querySelector('.carousel-button.left').addEventListener('click', () => {
    stopAutoSlide();
    showPreviousImage();
    startAutoSlide();
});

document.querySelector('.carousel-button.right').addEventListener('click', () => {
    stopAutoSlide();
    showNextImage();
    startAutoSlide();
});

// Función para el efecto de escritura de texto
function efectoTextTyping(elemento, texto, i = 0) {
    isTyping = true; // Marca que la animación está en curso
    if (i < texto.length) {
        elemento.textContent += texto[i];
        typingTimeout = setTimeout(() => efectoTextTyping(elemento, texto, i + 1), 100);
    } else {
        isTyping = false; // Marca que la animación ha terminado
    }
}

// Función para detener la animación de texto en curso
function stopTyping() {
    clearTimeout(typingTimeout); // Cancela cualquier timeout de la animación
    isTyping = false;
}

// Inicia el primer texto con el efecto de escritura
efectoTextTyping(div, texts[currentCarouselImage]);





