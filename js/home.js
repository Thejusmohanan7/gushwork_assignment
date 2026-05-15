const brochureModal = document.getElementById("brochureModal");

const openBrochureBtn = document.getElementById("openBrochureModal");

const closeBrochureBtn = document.getElementById("closeBrochureModal");

const brochureOverlay = document.querySelector(".brochure-overlay");

/* OPEN MODAL */
openBrochureBtn.addEventListener("click", () => {
    brochureModal.classList.add("active");
});

/* CLOSE BUTTON */
closeBrochureBtn.addEventListener("click", () => {
    brochureModal.classList.remove("active");
});

/* OVERLAY CLICK */
brochureOverlay.addEventListener("click", () => {
    brochureModal.classList.remove("active");
});

/* ESC KEY CLOSE */
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        brochureModal.classList.remove("active");
    }

});