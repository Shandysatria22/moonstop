// Menyimpan referensi ke semua slide dalam array
const slides = document.querySelectorAll('.slide');  // Pastikan ada 3 slide
let currentIndex = 0;


function changeSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    
    slides[index].classList.add('active');
    console.log("Current Slide Index:", index);  // Debug
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    changeSlide(currentIndex);
}, 3000);  // Ganti slide setiap 3 detik
