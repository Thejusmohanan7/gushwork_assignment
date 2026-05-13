// Main JavaScript

console.log("Main JS loaded");

// ✅ Smooth scroll
function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}

// ✅ Global handlers
function initGlobalHandlers() {

    // Close dropdowns or modals
    document.addEventListener("click", function (e) {

        if (!e.target.closest(".dropdown")) {

            // Optional dropdown close logic

        }

    });

    // Escape key events
    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            console.log("Escape pressed");

        }

    });

}

// 🚀 INIT APP
document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM fully loaded");

    initGlobalHandlers();

    console.log("All components initialized");

});

if (typeof loadTestimonials === "function") {
    loadTestimonials();
    console.log('Testimonials loaded');
}