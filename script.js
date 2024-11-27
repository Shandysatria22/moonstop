// Mendapatkan semua elemen dengan class 'banner'
const banners = document.querySelectorAll('.banner');
let currentIndex = 0;  // Index banner yang aktif

// Fungsi untuk mengubah banner berdasarkan index
function changeBanner(index) {
    // Menghapus class 'active' dari semua banner
    banners.forEach((banner) => {
        banner.classList.remove('active');
    });

    // Menambahkan class 'active' pada banner yang dipilih
    banners[index].classList.add('active');
}

// Menangani scroll
window.addEventListener('scroll', () => {
    // Menghitung posisi scroll saat ini
    const scrollPosition = window.scrollY;

    // Menghitung banner berdasarkan posisi scroll
    const newIndex = Math.floor(scrollPosition / window.innerHeight);  // Slide 0, 1, 2 dst.
    
    // Menghindari perubahan banner yang tidak perlu
    if (newIndex < banners.length && newIndex !== currentIndex) {
        currentIndex = newIndex;
        changeBanner(currentIndex);
    }
});
