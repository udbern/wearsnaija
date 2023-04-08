const slider2 = document.getElementById("product-slider-2");
const sliderWidth = slider2.offsetWidth;
let scrollAmount = 0;

function scrollToPrevious() {
  scrollAmount -= sliderWidth;
  slider2.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: "smooth",
  });
}

function scrollToNext() {
  scrollAmount += sliderWidth;
  slider2.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: "smooth",
  });
}