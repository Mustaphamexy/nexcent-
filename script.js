const menuIcon = document.querySelector ('#menu-icon');
const navbar = document.querySelector ('.navigation');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

});

function closeMenu() {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}