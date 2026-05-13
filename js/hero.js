const mainImg = document.getElementById("heroMainImage");
const thumbs = document.querySelectorAll(".hero-thumbs img");
const prevBtn = document.querySelector(".hero-nav.prev");
const nextBtn = document.querySelector(".hero-nav.next");

// Store all thumbnail sources in an array
const images = Array.from(thumbs).map(img => img.src);

// Current index
let currentIndex = 0;

// Function to update main image
function updateMainImage(index) {
    mainImg.src = images[index];
}

// Thumbnail click
thumbs.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        updateMainImage(currentIndex);
    });
});

// Previous button click
prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    updateMainImage(currentIndex);
});

// Next button click
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    updateMainImage(currentIndex);
});