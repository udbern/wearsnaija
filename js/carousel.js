const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const indicators = document.querySelectorAll('.carousel-indicator');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let totalItems = items.length;
let autoScrollInterval;
let nextBtnClicks = 0;
let continuousNextClicks = 0;

function setSlidePosition(slide) {
  const offset = slide * -100;
  items.forEach(item => {
    item.classList.remove('opacity-100');
    item.style.transform = `translateX(${offset}%)`;
  });
  items[currentIndex].classList.add('opacity-100');
}

function updateIndicators() {
  indicators.forEach((indicator, i) => {
    if (i === currentIndex) {
      indicator.classList.add('bg-gray-400');
    } else {
      indicator.classList.remove('bg-gray-400');
    }
  });
}



function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    setSlidePosition(currentIndex);
    updateIndicators();
    hideButtons();
  }, 3000);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  setSlidePosition(currentIndex);
  updateIndicators();
  hideButtons();
  stopAutoScroll();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  setSlidePosition(currentIndex);
  updateIndicators();
  hideButtons();
  stopAutoScroll();

  nextBtnClicks++;
  if (nextBtnClicks >= totalItems) {
    nextBtnClicks = 0;
    continuousNextClicks++;
    setTimeout(() => {
      currentIndex = 0;
      setSlidePosition(currentIndex);
      updateIndicators();
      hideButtons();
      continuousNextClicks = 0;
    }, 1000);
  }
});

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentIndex = i;
    setSlidePosition(currentIndex);
    updateIndicators();
    hideButtons();
    stopAutoScroll();
  });
});

startAutoScroll();

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    setSlidePosition(currentIndex);
    updateIndicators();
    hideButtons();
  }, 10000); // change the interval to 15 seconds
}


