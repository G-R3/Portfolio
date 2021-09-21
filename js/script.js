const navbarToggler = document.querySelector(".navbar-toggler");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navItems = document.querySelectorAll(".nav-item");
const navbar = document.querySelector(".navbar");

navbarToggler.addEventListener("click", () => {
    overlay.classList.toggle("overlay-show");
    nav.classList.toggle("show-nav");
    navbarToggler.classList.toggle("toggle");
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        overlay.classList.remove("overlay-show");
        nav.classList.remove("show-nav");
        navbarToggler.classList.remove("toggle");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
});
