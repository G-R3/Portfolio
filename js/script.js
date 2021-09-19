const navbarToggler = document.querySelector(".navbar-toggler");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navItems = document.querySelectorAll(".nav-item");

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
