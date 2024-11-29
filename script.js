const heroSections = document.querySelectorAll('.hero-section');
const dots = document.querySelectorAll('.dot');
let currentSectionIndex = 0;

if (heroSections.length > 0 && dots.length > 0) {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSectionIndex = index;
      scrollToSection(index);
    });
    dot.setAttribute('aria-label', `Go to section ${index + 1}`);
  });

  function scrollToSection(index) {
    if (index >= 0 && index < heroSections.length) {
      heroSections[index].scrollIntoView({ behavior: 'smooth' });
      updateActiveDot(index);
    }
  }

  function updateActiveDot(index) {
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && currentSectionIndex < heroSections.length - 1) {
      currentSectionIndex++;
    } else if (event.deltaY < 0 && currentSectionIndex > 0) {
      currentSectionIndex--;
    }
    scrollToSection(currentSectionIndex);
  });

  updateActiveDot(currentSectionIndex);
} else {
  console.error('Elemen hero-section atau dot tidak ditemukan.');
}
