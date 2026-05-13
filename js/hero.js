const mainImg = document.getElementById("heroMainImage");

const thumbs = document.querySelectorAll(".hero-thumbs img");

thumbs.forEach((img) => {

    img.addEventListener("click", () => {

        mainImg.src = img.src;

    });

});