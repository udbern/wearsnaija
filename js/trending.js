const slider = document.querySelector('#product-slider');
let scrollPos = 0;
let startX = 0;

slider.addEventListener('touchstart', e => {
  startX = e.touches[0].pageX;
});

slider.addEventListener('touchmove', e => {
  const touchX = e.touches[0].pageX;
  const moveX = startX - touchX;
  startX = touchX;
  scrollSlider(moveX);
});

function scrollSlider(scrollOffset) {
  scrollPos += scrollOffset;
  if (scrollPos < 0) {
    scrollPos = 0;
  } else if (scrollPos > slider.scrollWidth - slider.clientWidth) {
    scrollPos = slider.scrollWidth - slider.clientWidth;
  }
  slider.scrollTo({left: scrollPos, behavior: 'smooth'});
}