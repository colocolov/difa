// слайдер на главной
const miniSlider = new Swiper(".mini-slider__slider-wrapper", {
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

// let d = document.querySelector("mini-slider__intro");
// let topPos = d.offsetTop;

// function getCoords(elem) {
//   // кроме IE8-
//   var box = elem.getBoundingClientRect();

//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset,
//   };
// }

// console.log(top);

// if (topPos == offsetTop) {
// console.log("yes");
// }
