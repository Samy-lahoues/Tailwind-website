// Select dom elements
const mobileMenu = document.getElementById("mobile-menu");
const mobileBtn = document.getElementById("mobile-btn");

mobileBtn.onclick = () => {
    mobileMenu.classList.toggle("hidden")
}
