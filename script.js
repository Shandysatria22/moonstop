const heroSections = document.querySelectorAll('.hero-section');
const dots = document.querySelectorAll('.dot');
let currentSectionIndex = 0;

// Pengecekan apakah elemen ditemukan
if (heroSections.length > 0 && dots.length > 0) {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSectionIndex = index;
      scrollToSection(currentSectionIndex);
    });
    dot.setAttribute('aria-label', `Go to section ${index + 1}`);
    dot.setAttribute('role', 'tab'); // Tambahkan role="tab"
  });

  // Tambahkan role="tablist" pada container
  const navigationContainer = document.querySelector('.navigation');
  if (navigationContainer) {
    navigationContainer.setAttribute('role', 'tablist');
  }

  function scrollToSection(index) {
    if (index >= 0 && index < heroSections.length) {
      heroSections[index].scrollIntoView({ behavior: 'smooth' });
      updateActiveDot();
    }
  }

  function updateActiveDot() {
    dots.forEach((dot, index) => {
      // Optimasi: Hanya toggle jika state berubah
      if (dot.classList.contains('active') !== (index === currentSectionIndex)) {
        dot.classList.toggle('active', index === currentSectionIndex);
      }
    });
  }

  window.addEventListener('wheel', function(event) {
    currentSectionIndex = event.deltaY > 0 ? (currentSectionIndex + 1) % heroSections.length : (currentSectionIndex - 1 + heroSections.length) % heroSections.length;
    scrollToSection(currentSectionIndex);
  });
} else {
  console.error("Elemen hero-section atau dot tidak ditemukan.");
}
