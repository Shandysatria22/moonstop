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

const heroSection = document.querySelector('.hero');

function changeBannerOnScroll() {
    const scrollPosition = window.scrollY;
    console.log("Scroll Position: " + scrollPosition);  // Cek posisi scroll
    let bannerIndex = 0;

    // Mengubah gambar sesuai dengan posisi scroll
    if (scrollPosition > 200) {
        bannerIndex = 1;  // Ganti ke banner 2 setelah scroll > 500px
    }
    if (scrollPosition > 800) {
        bannerIndex = 2;  // Ganti ke banner 3 setelah scroll > 1500px
    }

    console.log("Banner Index: " + bannerIndex);  // Cek index gambar yang akan digunakan
    if (heroSection) {
        heroSection.style.backgroundImage = `url(${banners[bannerIndex]})`;
    }
}
window.addEventListener('scroll', changeBannerOnScroll);



