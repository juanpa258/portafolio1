// Mostrar mensaje con animación
function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    if (mensaje.classList.contains('hidden')) {
        mensaje.classList.remove('hidden');
    } else {
        mensaje.classList.add('hidden');
    }
}