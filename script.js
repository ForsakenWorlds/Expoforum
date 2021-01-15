const headerBurger = document.getElementById("header__burger");
const headerMenu = document.getElementById("header__menu");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active")
});