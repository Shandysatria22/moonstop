const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        changeSlide(currentIndex + 1); // Scroll ke bawah
    } else {
        changeSlide(currentIndex - 1); // Scroll ke atas
    }
});

function changeSlide(index) {
    const totalSlides = slides.length; // Hanya 3 slide

    if (index < 0) {
        currentIndex = 0;
    } else if (index >= totalSlides) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    console.log("Current Slide Index:", currentIndex); // Debug

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
}
