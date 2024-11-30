const feedback = document.getElementById("feedback");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const guessInput = document.getElementById("guess-input");

let randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100

// Función para generar un color aleatorio
function getRandomColor() {
    const letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para manejar el evento de adivinanza
submitBtn.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value); // Obtiene el valor del input

    // Verificar que el número esté dentro del rango válido
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Por favor, introduce un número entre 1 y 100";
        feedback.style.color = "black";
        return;
    }

    // Verificar si el usuario adivinó el número
    if (userGuess === randomNumber) {
        feedback.textContent = "¡Correcto!";
        feedback.style.color = "blue";
        resetBtn.style.display = "inline-block"; // Mostrar el botón de reiniciar
        submitBtn.disabled = true; // Desactivar el botón "Adivinar" después de acertar
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Demasiado bajo. Intenta de nuevo.";
        feedback.style.color = getRandomColor(); // Color aleatorio para feedback
    } else {
        feedback.textContent = "Demasiado alto. Intenta de nuevo.";
        feedback.style.color = getRandomColor(); // Color aleatorio para feedback
    }
});

// Función para reiniciar el juego
resetBtn.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generar un nuevo número aleatorio
    feedback.textContent = "";
    guessInput.value = "";
    resetBtn.style.display = "none"; // Ocultar el botón de reiniciar
    submitBtn.disabled = false; // Volver a habilitar el botón "Adivinar"
});
