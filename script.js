// Este script permite que la página tenga pequeñas interacciones 
// y prepara el terreno para futuras funciones.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Documento Legal de Sloet Games™ cargado correctamente.");

    // Ejemplo: Al hacer clic en el correo, se copia al portapapeles
    const emailLinks = document.querySelectorAll('strong');
    emailLinks.forEach(link => {
        if(link.innerText.includes('@')) {
            link.style.cursor = 'pointer';
            link.title = 'Haz clic para contactar';
            link.addEventListener('click', () => {
                window.location.href = `mailto:${link.innerText}`;
            });
        }
    });
});
