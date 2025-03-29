const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});


setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);







