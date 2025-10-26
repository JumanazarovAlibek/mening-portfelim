
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});


window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.style.background = window.scrollY > 50 ? "rgba(10,10,10,0.9)" : "rgba(10,10,10,0.6)";
});
