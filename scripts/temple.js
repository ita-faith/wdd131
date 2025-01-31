// Hamburger Menu Toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuButton.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
});

// Footer Date Updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
