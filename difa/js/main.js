// scroll
const findMe = document.querySelector(".main-servicii");
if (findMe) {

  let eventStatus = false;

  const isInViewport = function (elem) {
    const distance = elem.getBoundingClientRect();
    // console.log(distance.top);
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  window.addEventListener(
    "scroll",
    function (e) {
      if (isInViewport(findMe)) {
        // console.log('i see');
        if (!eventStatus) {
          // animate count scriprt
          const dataCounters = document.querySelectorAll(".main-servicii__count");
          // let interval = 1500;

          dataCounters.forEach((item) => {
            // console.log(item);
            let interval = parseInt(item.getAttribute("data-time")) * 500;
            let startValue = parseInt(item.getAttribute("data-min"));
            let endValue = parseInt(item.getAttribute("data-max"));
            let duration = Math.floor(interval / (endValue - startValue));
            // let duration = parseInt(item.getAttribute("data-time")) * 100;
            // let duration = Math.floor(interval / endValue);
            // console.log(duration);

            let counter = setInterval(function () {
              startValue += 1;
              item.textContent = startValue;
              if (startValue == endValue) {
                clearInterval(counter);
              }
            }, duration);

          });
          eventStatus = true;
        }
      }
    },
    false
  );

}

"use strict";

function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");

  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects);

  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(
    this.оbjects,
    function (item) {
      return (
        "(" +
        this.type +
        "-width: " +
        item.breakpoint +
        "px)," +
        item.breakpoint
      );
    },
    this
  );
  this.mediaQueries = Array.prototype.filter.call(
    this.mediaQueries,
    function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    }
  );

  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ",");
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];

    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(
      this.оbjects,
      function (item) {
        return item.breakpoint === mediaBreakpoint;
      }
    );
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === "last" || place >= destination.children.length) {
    destination.insertAdjacentElement("beforeend", element);
    return;
  }
  if (place === "first") {
    destination.insertAdjacentElement("afterbegin", element);
    return;
  }
  destination.children[place].insertAdjacentElement("beforebegin", element);
};

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement("beforebegin", element);
  } else {
    parent.insertAdjacentElement("beforeend", element);
  }
};

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

const da = new DynamicAdapt("max");
da.init();

// слайдер на главной
const headerSlider = new Swiper(".main-slider", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 800,
  navigation: {
    nextEl: ".main-slider__btn-next",
    prevEl: ".main-slider__btn-prev",
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
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

// мобильное меню

// проверка, является ли уствройство мобильным
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  // document.querySelector('html').classList.add('_touch');
  document.body.classList.add("_touch");
}

//выпадающее меню для мобильных устройств
document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;
  if (window.innerWidth > 768 && isMobile.any()) {
    if (targetElement.classList.contains("menu__link")) {
      // console.log("ehhh");
      targetElement.closest(".menu__item").classList.toggle("_hover");
    }
    if (
      !targetElement.closest(".menu__item") &&
      document.querySelectorAll(".menu__item._hover").length > 0
    ) {
      var element = document.querySelector(".menu__item._hover");
      element.classList.remove("_hover");
    }
  }

  if (window.innerWidth > 768 && isMobile.any()) {
    if (
      targetElement.closest(".menu__arrow") &&
      !targetElement.closest(".sub-menu")
    ) {
      e.preventDefault();
      targetElement.closest(".menu__item").classList.toggle("_hover");
    }
    if (
      !targetElement.closest(".menu__item") &&
      document.querySelectorAll(".menu__item._hover").length > 0
    ) {
      var element = document.querySelector(".menu__item._hover");
      element.classList.remove("_hover");
    }
  }
}

// меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelector(".menu__item");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
// закрытие при клике
menuLink.addEventListener("click", function (e) {
  // console.log("yes");
  document.body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
});

// var portfolioSliderThumb = new Swiper(".portfolio-slider--thumb", {
//   // loop: true,
//   spaceBetween: 57,
//   slidesPerView: 4,
//   // slidesPerGroup: 4,
//   freeMode: true,
//   // watchSlidesProgress: true,
//   navigation: {
//     nextEl: ".portfolio-slider__btn-thumb-next",
//     prevEl: ".portfolio-slider__btn-thumb-prev",
//     clickable: true,
//   },
// });
// var portfolioSliderPreview = new Swiper(".portfolio-slider--preview", {
//   // loop: true,
//   slidesPerView: 1,
//   slideToClickedSlide: true,
//   // spaceBetween: 10,
//   speed: 800,
//   effect: "fade",
//   fadeEffect: {
//     crossFade: true,
//   },
//   navigation: {
//     nextEl: ".portfolio-slider__btn-next",
//     prevEl: ".portfolio-slider__btn-prev",
//     clickable: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   thumbs: {
//     swiper: portfolioSliderThumb,
//   },
// });

//# sourceMappingURL=main.js.map
