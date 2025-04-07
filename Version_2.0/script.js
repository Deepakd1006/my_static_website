// Basic animation effect on scroll (optional)

window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section, i) => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 0.6s ease-in-out';
    setTimeout(() => {
      section.style.opacity = 1;
    }, 300 * i);
  });
});
