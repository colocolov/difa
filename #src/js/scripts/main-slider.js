// слайдер на главной
const headerSlider = new Swiper(".main-slider__slider", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 800,
  navigation: {
    nextEl: ".main-slider--next",
    prevEl: ".main-slider__btn-prev",
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
//----- END
