/* ================= QUOTE MODAL ================= */

const quoteModal = document.getElementById("quoteModal");

const openQuoteBtn = document.getElementById("openQuoteModal");

const closeQuoteBtn = document.getElementById("closeQuoteModal");

const quoteOverlay = document.querySelector(".quote-overlay");

/* OPEN */
openQuoteBtn.addEventListener("click", () => {
    quoteModal.classList.add("active");
});

/* CLOSE BUTTON */
closeQuoteBtn.addEventListener("click", () => {
    quoteModal.classList.remove("active");
});

/* OVERLAY CLICK */
quoteOverlay.addEventListener("click", () => {
    quoteModal.classList.remove("active");
});

/* ESC CLOSE */
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        quoteModal.classList.remove("active");
    }

});