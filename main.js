// Asegúrate de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Cargar el sonido
    const sound = new Audio('./recursos/sound.mp3');

    // Seleccionar el elemento del triángulo
    const triangle = document.querySelector('.triangle');

    // Verificar si el elemento existe
    if (triangle) {
        // Añadir el evento de clic al triángulo
        triangle.addEventListener('click', () => {
            sound.play();
        });
    } else {
        console.error('El elemento con la clase .triangle no existe en el DOM.');
    }
});
