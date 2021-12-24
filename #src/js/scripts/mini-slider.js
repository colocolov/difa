// слайдер на главной
const miniSlider = new Swiper(".mini-slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  navigation: {
    nextEl: ".mini-slider__btn-next",
    prevEl: ".mini-slider__btn-prev",
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
//----- END
