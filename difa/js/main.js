// accordeon
// document.addEventListener("DOMContentLoaded", () => {
//   const accordeons = document.querySelectorAll(".accordeon__item");

//   accordeons.forEach((el) => {
//     el.addEventListener("click", (e) => {
//       const self = e.currentTarget;
//       const title = self.querySelector(".accordeon__name");
//       const content = self.querySelector(".accordeon__decription");

//       self.classList.toggle("active");
//     });
//   });
// });
// ----- END

// слайдер на главной
const headerSlider = new Swiper(".main-slider", {
  loop: true,
  autoplay: {
    //пауза между прокруткой
    delay: 3000,
    //закончить на последнем слайде
    // stopOnLastSlide: false,
    //отключить после ручного переключения
    // disableOnInteraction: false,
  },
  //скорость переключения слайдов
  speed: 800,
  // навигация по стрелкам
  navigation: {
    nextEl: ".main-slider__btn-next",
    prevEl: ".main-slider__btn-prev",
    // disabledClass: "stories-button__unactive",
    clickable: true,
    // для ппрвильного направления
  },
  //эффект перехода слайда (только если показ по 1-му слайду)
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  //отключаем презагрузку картинок
  // preloadImages: false,
  // lazy: {
  //   loadOnTransitionStart: false,
  //   loadPrevNext: false,
  // },
  // // переключение при клике на слайд
  // slideToClickedSlide: true,
  // отключение прокрутки при наведении мыши
  // on: {
  //   init() {
  //     this.el.addEventListener("mouseenter", () => {
  //       this.autoplay.stop();
  //     });

  //     this.el.addEventListener("mouseleave", () => {
  //       this.autoplay.start();
  //     });
  //   },
  // },
  //
});
//----- END

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

// слайдер отзывов
// var reviewsSlider = new Swiper(".reviews__sliders", {
//   loop: true,
//   navigation: {
//     nextEl: ".reviews-button--right",
//     prevEl: ".reviews-button--left",
//     clickable: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
// });
//----- END

//# sourceMappingURL=main.js.map
