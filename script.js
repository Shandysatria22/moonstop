window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let heroSections = document.querySelectorAll('.hero-section');
    let dots = document.querySelectorAll('.dot');
    let activeDotIndex = Math.floor(scrollPosition / windowHeight);
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeDotIndex);
    });
  });
  
    heroSections.forEach(section => {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.offsetHeight;
      let sectionMiddle = sectionTop + sectionHeight / 2;
  
      if (scrollPosition >= sectionMiddle - windowHeight / 2 && scrollPosition < sectionMiddle + windowHeight / 2) {
          section.style.transform = 'scale(1.1)'; // Efek skala saat aktif
      } else {
          section.style.transform = 'scale(1)';
      }
    });