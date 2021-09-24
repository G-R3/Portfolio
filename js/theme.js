const darkBtn = document.querySelector(".dark-btn");
const lightBtn = document.querySelector(".light-btn");
const body = document.querySelector("body");

const theme = localStorage.getItem("theme");

if (theme) {
    body.setAttribute("class", theme);

    if (theme === "dark-theme") {
        lightBtn.style.display = "inline";
        darkBtn.style.display = "none";
    } else if (theme === "light-theme") {
        darkBtn.style.display = "inline";
        lightBtn.style.display = "none";
    }
}

lightBtn.addEventListener("click", () => {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    localStorage.setItem("theme", "light-theme");

    darkBtn.style.display = "inline";
    lightBtn.style.display = "none";
});

darkBtn.addEventListener("click", () => {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    localStorage.setItem("theme", "dark-theme");

    lightBtn.style.display = "inline";
    darkBtn.style.display = "none";
});
