document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.main-container');
    
    // Opacidad inicial 0
    content.style.opacity = '0';
    content.style.transition = 'opacity 1s ease-in-out';

    // Fade-in
    setTimeout(() => {
        content.style.opacity = '1';
    }, 100);
});
