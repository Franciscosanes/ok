// Función para reproducir el audio
function PlayAudio() {
    const audio = document.getElementById("musica1");
    audio.play().catch((error) => {
        console.error("Error al intentar reproducir el audio:", error);
    });
}

// Agregar el evento de clic al documento para iniciar el audio
document.body.addEventListener("click", PlayAudio);

// Función para la cuenta regresiva
function countdown() {
    const eventDate = new Date("December 21, 2024 16:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.querySelector(".countdown-container").innerHTML = "<h2>¡El gran día ha llegado!</h2>";
    }
}

// Mostrar el recuadro de la cuenta regresiva al hacer scroll
// Mostrar el recuadro de la cuenta regresiva al hacer scroll
function handleScroll() {
    const countdownContainer = document.querySelector(".countdown-container");

    if (countdownContainer && countdownContainer.classList.contains("hidden")) {
        countdownContainer.classList.remove("hidden");
        countdownContainer.classList.add("show");
    }
}

// Ejecutar la cuenta regresiva y agregar el evento de scroll
document.addEventListener("DOMContentLoaded", () => {
    countdown(); // Iniciar la cuenta regresiva
    window.addEventListener("scroll", handleScroll); // Manejar el scroll para mostrar el contenedor
});

// Iniciar la cuenta regresiva cada segundo
const timer = setInterval(countdown, 1000);

// Escuchar el evento de scroll
window.addEventListener("scroll", handleScroll);

// Mostrar/ocultar el apartado de confirmación
function toggleConfirmation() {
    const confirmation = document.getElementById("confirmation");
    if (confirmation) {
        if (confirmation.style.display === "none" || !confirmation.style.display) {
            confirmation.style.display = "block";
            confirmation.classList.remove("hidden");
        } else {
            confirmation.style.display = "none";
            confirmation.classList.add("hidden");
        }
    }
}


// Ocultar el apartado al enviar
function hideConfirmation() {
    const confirmation = document.getElementById("confirmation");
    confirmation.classList.add("hidden");
    confirmation.style.display = "none";
}

// Validar el formulario y ocultar el apartado
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const info = document.getElementById("info").value.trim();
    const attendance = document.querySelector('input[name="attendance"]:checked');

    if (!name || !info || !attendance) {
        alert("Por favor, complete todos los campos y seleccione una opción.");
        return;
    }

    alert("¡Gracias por confirmar tu asistencia!");
    hideConfirmation(); // Ocultar el recuadro
}

document.getElementById("view-images-button").addEventListener("click", function () {
    showImages();
});

document.getElementById("hide-images-button").addEventListener("click", function () {
    hideImages();
});

// Mostrar la imagen en el modal
// Función para abrir el modal y mostrar la imagen seleccionada
function enlargeImage(img) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    if (img.src) {
        modalImage.src = img.src; // Asignar la imagen seleccionada al modal
        modal.classList.add("visible"); // Mostrar el modal
    } else {
        console.error("Error: No se pudo cargar la imagen ampliada.");
    }
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    modalImage.src = ""; // Limpiar la fuente de la imagen
    modal.classList.remove("visible"); // Ocultar el modal
}


// Mostrar imágenes horizontales ocultas
function showImages() {
    const hiddenImages = document.querySelectorAll(".image-gallery .hidden");

    hiddenImages.forEach(image => {
        image.classList.remove("hidden"); // Quitar clase "hidden" para mostrar
        image.classList.add("horizontal-image"); // Aplicar estilo horizontal
    });
}

// Ocultar imágenes adicionales
function hideImages() {
    const additionalImages = document.querySelectorAll(".image-gallery .image-wrapper:not(:nth-child(-n+2))");
    additionalImages.forEach(image => {
        image.classList.add("hidden"); // Agregar clase "hidden" para ocultar
        image.classList.remove("horizontal-image"); // Quitar estilo horizontal al ocultar
    });
}

function toggleSongForm() {
    const songForm = document.getElementById("new-song-form");
    // Alternar visibilidad del formulario
    if (songForm.classList.contains("hidden")) {
        songForm.classList.remove("hidden");
    } else {
        songForm.classList.add("hidden");
    }
}
function sendWhatsAppMessage() {
    // Capturar valores de los campos (pueden estar vacíos)
    const name = document.getElementById("name").value.trim() || "Anónimo";
    const songName = document.getElementById("song-name").value.trim() || "Sin especificar";

    // Crear el mensaje para WhatsApp
    const message = `Hola, soy ${name} y quiero sugerir la canción: ${songName}`;
    const encodedMessage = encodeURIComponent(message); // Codificar el mensaje para URL

    // Redirigir al enlace de WhatsApp
    const whatsappURL = `https://wa.me/7712882120?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank"); // Abrir en una nueva pestaña o ventana
}

function sendAttendanceWhatsAppMessage() {
    // Capturar valores del formulario
    const name = document.getElementById("attendance-name").value.trim() || "Anónimo";
    const attendance = document.querySelector('input[name="attendance"]:checked')?.value || "Sin respuesta";

    // Crear el mensaje para WhatsApp
    const message = `Hola, soy ${name}. Mi confirmación de asistencia es: ${attendance}.`;
    const encodedMessage = encodeURIComponent(message); // Codificar el mensaje para URL

    // Redirigir al enlace de WhatsApp
    const whatsappURL = `https://wa.me/7712882120?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank"); // Abrir en una nueva pestaña o ventana
}

function redirectToLocation() {
    const locationURL = "https://maps.apple.com/?ll=20.105448,-99.157195&q=Ubicaci%C3%B3n%20marcada&t=h";
    window.open(locationURL, "_blank"); // Abre el enlace en una nueva pestaña o ventana
}
