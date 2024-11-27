// script.js
document.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    let heroSection = document.querySelector(".hero");

    // Tentukan perubahan gambar banner berdasarkan scroll
    if (scrollPosition < 500) {
        heroSection.style.backgroundImage = "url('images/banner-1.png')";
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
        heroSection.style.backgroundImage = "url('images/banner-2.png')";
    } else if (scrollPosition >= 1000) {
        heroSection.style.backgroundImage = "url('images/banner-3.png')";
    }
});
