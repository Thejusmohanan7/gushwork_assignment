const mainImg = document.getElementById("heroMainImage");

const thumbs = document.querySelectorAll(".hero-thumbs img");

const prevBtn = document.querySelector(".hero-nav.prev");

const nextBtn = document.querySelector(".hero-nav.next");

const heroMain = document.querySelector(".hero-main");

/* IMAGE SOURCES */
const images = Array.from(thumbs).map(img => img.src);

/* CURRENT INDEX */
let currentIndex = 0;

/* UPDATE MAIN IMAGE */
function updateMainImage(index) {

    mainImg.style.opacity = 0;

    setTimeout(() => {

        mainImg.src = images[index];

        mainImg.style.opacity = 1;

    }, 150);

    /* ACTIVE THUMB */
    thumbs.forEach(img => {
        img.classList.remove("active");
    });

    thumbs[index].classList.add("active");
}

/* INITIAL ACTIVE */
thumbs[0].classList.add("active");

/* THUMB CLICK */
thumbs.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        updateMainImage(currentIndex);

    });

});

/* PREVIOUS */
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateMainImage(currentIndex);

});

/* NEXT */
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateMainImage(currentIndex);

});

/* PREMIUM INTERACTIVE CURSOR ZOOM */
heroMain.addEventListener("mousemove", (e) => {

    const rect = heroMain.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;

    const yPercent = (y / rect.height) * 100;

    mainImg.style.transformOrigin =
        `${xPercent}% ${yPercent}%`;

    mainImg.style.transform = "scale(1.8)";
});

/* RESET */
heroMain.addEventListener("mouseleave", () => {

    mainImg.style.transformOrigin = "center";

    mainImg.style.transform = "scale(1)";
});

/* SMOOTH FADE */
mainImg.style.transition =
    "transform 0.15s ease-out, opacity 0.3s ease";