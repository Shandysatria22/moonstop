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
    'images/banner-1.png',  // Gambar pertama
    'images/banner-2.png',  // Gambar kedua (misal)
    'images/banner-3.png'   // Gambar ketiga (misal)
];

// Menyimpan elemen hero
const heroSection = document.querySelector('.hero');

// Fungsi untuk mengganti banner saat scroll
function changeBannerOnScroll() {
    const scrollPosition = window.scrollY; // Mendapatkan posisi scroll
    console.log("Scroll Position: " + scrollPosition);

    // Tentukan index gambar banner yang digunakan berdasarkan posisi scroll
    let bannerIndex = Math.floor(scrollPosition / window.innerHeight);

    // Jika scroll lebih jauh dari jumlah gambar banner yang ada, reset ke gambar pertama
    if (bannerIndex >= banners.length) {
        bannerIndex = banners.length - 1;
    }

    // Ubah background image di section hero
    heroSection.style.backgroundImage = `url(${banners[bannerIndex]})`;
}

// Menambahkan event listener untuk event scroll
window.addEventListener('scroll', changeBannerOnScroll);
