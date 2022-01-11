var portfolioSliderThumb = new Swiper(".portfolio-slider--thumb", {
  // loop: true,
  spaceBetween: 57,
  slidesPerView: 4,
  // slidesPerGroup: 4,
  freeMode: true,
  // watchSlidesProgress: true,
  navigation: {
    nextEl: ".portfolio-slider__btn-thumb-next",
    prevEl: ".portfolio-slider__btn-thumb-prev",
    clickable: true,
  },
});
var portfolioSliderPreview = new Swiper(".portfolio-slider--preview", {
  // loop: true,
  slidesPerView: 1,
  slideToClickedSlide: true,
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
  pagination: {
    el: ".swiper-pagination",
  },
  thumbs: {
    swiper: portfolioSliderThumb,
  },
});
