const heroSections = document.querySelectorAll('.hero-section');
const dots = document.querySelectorAll('.dot');
let currentSectionIndex = 0;

// Tambahkan event listener untuk setiap titik navigasi
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSection(index);
  });
  dot.setAttribute('aria-label', `Go to section ${index + 1}`);
});

// Fungsi untuk berpindah ke section
function goToSection(index) {
  if (index >= 0 && index < heroSections.length) {
    currentSectionIndex = index;
    scrollToSection(currentSectionIndex);
  }
}

// Fungsi untuk melakukan scroll ke section
function scrollToSection(index) {
  heroSections[index].scrollIntoView({ behavior: 'smooth' });
  updateActiveDot();
}

// Fungsi untuk memperbarui titik navigasi aktif
function updateActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSectionIndex);
  });
}

// Event listener untuk scroll mouse wheel
window.addEventListener('wheel', (event) => {
  goToSection((currentSectionIndex + (event.deltaY > 0 ? 1 : -1) + heroSections.length) % heroSections.length);
});