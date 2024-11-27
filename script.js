// script.js
document.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    let heroSection = document.querySelector(".hero");

    // Tentukan perubahan gambar berdasarkan scroll
    if (scrollPosition < 500) {
        heroSection.style.backgroundImage = "url('images/banner1.png')";
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
        heroSection.style.backgroundImage = "url('images/banner2.png')";
    } else if (scrollPosition >= 1000) {
        heroSection.style.backgroundImage = "url('images/banner3.png')";
    }
});
