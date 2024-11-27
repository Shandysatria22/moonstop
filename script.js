const slides = document.querySelectorAll('.slide');  // Mengambil semua slide
let currentIndex = 0;  // Indeks slide yang aktif

// Fungsi untuk mengganti slide
function changeSlide(index) {
    // Hapus kelas 'active' dari semua slide
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Tambahkan kelas 'active' pada slide yang sesuai
    slides[index].classList.add('active');
    console.log("Current Slide Index:", index);  // Debugging untuk melihat indeks saat ini
}

// Menangani event scroll
window.addEventListener('scroll', () => {
    // Hitung posisi scroll dalam piksel
    const scrollPosition = window.scrollY;
    console.log("Scroll Position:", scrollPosition);  // Debugging untuk melihat posisi scroll
    
    // Hitung slide yang aktif berdasarkan posisi scroll
    const newIndex = Math.floor(scrollPosition / window.innerHeight);

    // Pastikan slide index berada dalam batas jumlah slide yang ada
    if (newIndex < slides.length && newIndex !== currentIndex) {
        currentIndex = newIndex;
        changeSlide(currentIndex);
    }
});
