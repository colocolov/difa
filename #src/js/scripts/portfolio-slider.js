var portfolioSliderThumb = new Swiper(".portfolio-slider--thumb", {
  // loop: true,
  spaceBetween: 57,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var portfolioSliderImg = new Swiper(".portfolio-slider--img", {
  // loop: true,
  slidesPerView: 1,
  // spaceBetween: 10,
  speed: 800,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".portfolio-slider__btn-next",
    prevEl: ".portfolio-slider__btn-prev",
    clickable: true,
  },
  thumbs: {
    swiper: portfolioSliderThumb,
  },
});
