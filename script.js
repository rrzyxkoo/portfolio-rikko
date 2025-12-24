document.querySelectorAll('.slider').forEach((slider) => {
  const track = slider.querySelector('.slider-track');
  const slides = track.children;
  let index = 0;

  function updateSlide() {
    const width = slider.clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  slider.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });

  slider.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

  window.addEventListener('resize', updateSlide);
});

document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.getElementById('hero-title');
  if (!heroTitle) return;

  const text = heroTitle.textContent;
  heroTitle.textContent = '';

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`; // jeda tiap huruf
    heroTitle.appendChild(span);
  });
});
