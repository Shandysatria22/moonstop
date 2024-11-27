const slides = document.querySelectorAll('.slide');
let currentIndex = 0;  // Index slide yang aktif

// Fungsi untuk mengubah slide
function changeSlide(index) {
    // Menghapus kelas 'active' dari semua slide
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Menambahkan kelas 'active' pada slide yang dipilih
    slides[index].classList.add('active');
}

// Event listener untuk scroll
window.addEventListener('scroll', () => {
    // Menghitung posisi scroll saat ini
    const scrollPosition = window.scrollY;

    // Menghitung slide berdasarkan posisi scroll
    const newIndex = Math.floor(scrollPosition / window.innerHeight);  // Slide 0, 1, 2 dst.
    
    // Menghindari perubahan slide yang tidak perlu
    if (newIndex < slides.length && newIndex !== currentIndex) {
        currentIndex = newIndex;
        changeSlide(currentIndex);
    }
});
