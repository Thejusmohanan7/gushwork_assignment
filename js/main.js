// Main JavaScript

console.log('Main JS loaded - All components ready');

// ✅ Smooth scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ✅ Global handlers
function initGlobalHandlers() {
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            // close dropdown if needed
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            console.log('Escape pressed');
        }
    });
}

// 🚀 INIT APP
document.addEventListener('DOMContentLoaded', function () {

    console.log('DOM fully loaded');

    // 1️⃣ Global handlers
    initGlobalHandlers();

    // 2️⃣ Load components (HTML injection)
    if (typeof loadNavbar === "function") {
        loadNavbar();
        console.log('Navbar loaded');
    }

    if (typeof loadHero === "function") {
        loadHero();
        console.log('Hero loaded');
    }

    // 3️⃣ Init components AFTER DOM update
    // (important because hero content is injected dynamically)
    setTimeout(() => {

        if (typeof initHero === "function") {
            initHero();
            console.log('Hero initialized');
        }

    }, 0); // ensures DOM is updated

    console.log('All components loaded successfully');
});