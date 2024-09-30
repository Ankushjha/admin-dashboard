
const hamburgerMenu = document.querySelector('.bi-list');
const sectionLeftMenu = document.querySelector('.section-left');

hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    sectionLeftMenu.classList.toggle('d-none');
}