let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  currentIndex = (index + totalSlides) % totalSlides; // Wrap around

  // Move the slide container
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

