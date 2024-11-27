const heroSections = document.querySelectorAll('.hero-section');
const dots = document.querySelectorAll('.dot');
let currentSectionIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSectionIndex = index;
    scrollToSection(currentSectionIndex);
  });
  dot.setAttribute('aria-label', `Go to section ${index + 1}`); // Added aria-label
});

function scrollToSection(index) {
  if (index >= 0 && index < heroSections.length) {
    heroSections[index].scrollIntoView({ behavior: 'smooth' });
    updateActiveDot();
  }
}

function updateActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSectionIndex);
  });
}


window.addEventListener('wheel', function(event) {
  currentSectionIndex = event.deltaY > 0 ? (currentSectionIndex + 1) % heroSections.length : (currentSectionIndex - 1 + heroSections.length) % heroSections.length;
  scrollToSection(currentSectionIndex);
});