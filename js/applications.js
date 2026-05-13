// ================= APPLICATIONS SLIDER =================

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".applications-track");

    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    const cards = document.querySelectorAll(".application-card");

    if (!track || !nextBtn || !prevBtn) return;

    let currentIndex = 0;

    const visibleCards = 3;

    const maxIndex = cards.length - visibleCards;

    // CARD WIDTH + GAP
    const moveAmount = 448;

    // UPDATE SLIDER
    function updateSlider() {

        track.style.transform =
            `translateX(-${currentIndex * moveAmount}px)`;

    }

    // NEXT
    nextBtn.addEventListener("click", () => {

        if (currentIndex < maxIndex) {

            currentIndex++;

            updateSlider();

        }

    });

    // PREV
    prevBtn.addEventListener("click", () => {

        if (currentIndex > 0) {

            currentIndex--;

            updateSlider();

        }

    });

});