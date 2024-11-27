const slides = document.querySelectorAll('.slide');  // Mengambil semua elemen slide
let currentIndex = 0;  // Slide pertama yang aktif

// Fungsi untuk mengubah slide
function changeSlide(index) {
    // Hapus kelas 'active' dari semua slide
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Tambahkan kelas 'active' pada slide yang sesuai
    slides[index].classList.add('active');
    console.log("Current Slide Index:", index);  // Debugging untuk melihat indeks saat ini
}

// Mengatur scroll untuk mengganti slide
window.addEventListener('scroll', () => {
    // Hitung posisi scroll
    const scrollPosition = window.scrollY;

    // Menentukan slide yang aktif berdasarkan posisi scroll
    // Misalnya, setiap 1000px scroll, kita pindah ke slide berikutnya
    const newIndex = Math.floor(scrollPosition / window.innerHeight);

    // Pastikan tidak lebih dari jumlah slide yang ada
    if (newIndex < slides.length && newIndex !== currentIndex) {
        currentIndex = newIndex;
        changeSlide(currentIndex);
    }
});
