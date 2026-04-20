 AOS.init({
    duration: 1000,
    once: true
  });
  const wrapper = document.querySelector('.testimonials-wrapper');
const cards = document.querySelectorAll('.testimonial-card');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.remove('active');
    if (index === currentIndex) card.classList.add('active');
  });
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateActiveCard();
  wrapper.scrollTo({ left: cards[currentIndex].offsetLeft - wrapper.offsetLeft, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) currentIndex++;
  updateActiveCard();
  wrapper.scrollTo({ left: cards[currentIndex].offsetLeft - wrapper.offsetLeft, behavior: 'smooth' });
});

// Initialize
updateActiveCard();
