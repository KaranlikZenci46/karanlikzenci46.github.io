document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.md\\:hidden + .md\\:flex');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });
});