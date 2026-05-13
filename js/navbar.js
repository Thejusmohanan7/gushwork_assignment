window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.1)";

    } else {

        navbar.style.boxShadow =
            "0 1px 3px rgba(0,0,0,0.1)";

    }

});