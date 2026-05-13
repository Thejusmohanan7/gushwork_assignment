const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");
const dropdowns = document.querySelectorAll(".dropdown");

// Toggle hamburger menu
hamburger.addEventListener("click", () => {
    navLinks.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

// Dropdown toggle inside mobile
dropdowns.forEach(drop => {
    const toggle = drop.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        drop.classList.toggle("open");
    });
});

// Scroll shadow effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
    }
});