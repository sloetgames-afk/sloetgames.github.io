/**
 * Sloet Games™ - Legal Center
 * Script para mejorar la interactividad y navegación
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Confirmación de carga en consola (Opcional, profesional)
    console.log("Sloet Games Legal Center: Active");

    // 2. Control de navegación suave (Smooth Scrolling)
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Se puede añadir lógica extra aquí si se desea
            // por ejemplo, cerrar un menú en el futuro.
        });
    });

    // 3. Efecto visual al hacer scroll (Opcional)
    // Cambia la opacidad de las secciones al entrar en pantalla
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0.8'; // Estado inicial
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});
