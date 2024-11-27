const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll ke bawah
        changeSlide(currentIndex + 1);
    } else {
        // Scroll ke atas
        changeSlide(currentIndex - 1);
    }
});

function changeSlide(index) {
    if (index < 0) {
        currentIndex = 0;
    } else if (index >= slides.length) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    console.log("Current Slide Index:", currentIndex); // Debugging

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
}

