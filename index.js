let hamburger = document.querySelector(".header"),
    btn = document.querySelector(".header__button");

btn.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger");
});