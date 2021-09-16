const navbar = document.querySelector('.navbar');
const menu = navbar.querySelector('.ham-menu');
const navbarList = navbar.querySelector('.navbar-list');

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
    // this.firstElementChild.src = navbarList.classList.toggle('active') ? "./icons/x.svg" : "./icons/menu.svg";
    navbarList.classList.toggle('active');
});