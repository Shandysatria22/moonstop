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

// Mencari setiap section
const sections = document.querySelectorAll('section');

// Fungsi untuk mengubah banner saat scroll
function changeBannerOnScroll() {
    const scrollPosition = window.scrollY; // Posisi scroll
    console.log("Scroll Position: " + scrollPosition); // Cek posisi scroll
    
    sections.forEach((section, index) => {
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Jika scroll mencapai bagian section, ganti background-nya
        if (scrollPosition >= sectionOffsetTop - window.innerHeight / 2 &&
            scrollPosition < sectionOffsetTop + sectionHeight - window.innerHeight / 2) {
            section.style.backgroundImage = `url(${banners[index]})`;
        }
    });
}

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', changeBannerOnScroll);



