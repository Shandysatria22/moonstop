// Script untuk membuat efek scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menambahkan kelas animasi saat elemen muncul di layar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('animate'); // Menambahkan kelas animate saat elemen masuk viewport
        }
    });
});

// Daftar gambar untuk background yang akan digunakan
const banners = [
    'images/Banner 1.png', // Gambar pertama
    'images/Banner 2.png', // Gambar kedua
    'images/Banner 3.png'  // Gambar ketiga
];

// Dapatkan hero section
const heroSection = document.querySelector('.hero');

// Fungsi untuk mengganti gambar background berdasarkan scroll
function changeBannerOnScroll() {
    const scrollPosition = window.scrollY; // Posisi scroll saat ini
    let bannerIndex = 0;

    // Tentukan index gambar berdasarkan scroll
    if (scrollPosition > 1000) {
        bannerIndex = 1;  // Setelah scroll 1000px, ganti ke banner2
    }
    if (scrollPosition > 2000) {
        bannerIndex = 2;  // Setelah scroll 2000px, ganti ke banner3
    }

    // Ganti background image dengan gambar sesuai index
    heroSection.style.backgroundImage = `url(${banners[bannerIndex]})`;
}

// Tambahkan event listener pada scroll untuk mendeteksi perubahan posisi scroll
window.addEventListener('scroll', changeBannerOnScroll);


