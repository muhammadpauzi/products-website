const navbar = document.querySelector('.navbar');
const menu = navbar.querySelector('.ham-menu');
const navbarList = navbar.querySelector('.navbar-list');
const backdrop = document.querySelector('.backdrop');

function showStickyNavbar() {
    if (this.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

showStickyNavbar();

window.addEventListener('scroll', showStickyNavbar)

menu.addEventListener('click', function () {
    backdrop.classList.toggle('show');
    navbarList.classList.toggle('show');
});