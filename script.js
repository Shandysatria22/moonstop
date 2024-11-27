const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function changeSlide(index) {
    const totalSlides = slides.length; // Harus 3

    if (index < 0) {
        currentIndex = 0;
    } else if (index >= totalSlides) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    console.log("Current Slide Index:", currentIndex); // Debug Index

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
        console.log(`Slide ${i} Active: ${i === currentIndex}`); // Debug kelas active
    });
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        changeSlide(currentIndex + 1); // Scroll down
    } else {
        changeSlide(currentIndex - 1); // Scroll up
    }
});
