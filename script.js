const heroSections = document.querySelectorAll('.hero-section');
const dots = document.querySelectorAll('.dot');
let currentSectionIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSectionIndex = index;
    scrollToSection(currentSectionIndex);
    updateActiveDot();
  });
});

function scrollToSection(index) {
  if (index >= 0 && index < heroSections.length) {
    heroSections[index].scrollIntoView({ behavior: 'smooth' }); // 'smooth' untuk animasi halus
    updateActiveDot();
  }
}

function updateActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSectionIndex) {
      dot.classList.add('active');
    }
  });
}

// Otomatis pindah ke section selanjutnya (opsional)
setInterval(() => {
    currentSectionIndex = (currentSectionIndex + 1) % heroSections.length;
    scrollToSection(currentSectionIndex);
}, 5000); // Ubah 5000 (milidetik) untuk mengatur interval waktu


window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        currentSectionIndex = (currentSectionIndex + 1) % heroSections.length;
        scrollToSection(currentSectionIndex);
    } else {
        currentSectionIndex = (currentSectionIndex - 1 + heroSections.length) % heroSections.length;
        scrollToSection(currentSectionIndex);
    }
});