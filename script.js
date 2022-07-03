// if press .hambuger-menu
let hamburger = document.querySelector(".hamburger-menu");
let menu = document.querySelector("nav ul.main-nav");

function toggleMenu() {
  menu.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
