// scroll
const findMe = document.querySelector(".main-servicii");
if (findMe) {

  // let eventStatus = false;

  const isInViewport = function (elem) {
    const distance = elem.getBoundingClientRect(); // оригинал
    // console.log(elem.getBoundingClientRect());
    // console.log("Top - " + distance.top);
    // console.log("Left - " + distance.left);
    // console.log("Right - " + distance.right);
    // console.log("Bottom - " + distance.bottom);
    // console.log(elem.clientHeight * 0.334);
    // console.log(distance.top + document.documentElement.clientHeight);
    return (
      distance.top <= (elem.clientHeight * 0.334)
      // &&
      // distance.left >= 0 &&
      // distance.bottom <= 
      // (distance.top + document.documentElement.clientHeight) 
      // distance.right <=
      // (window.innerWidth || document.documentElement.clientWidth)
      );
  };

  window.addEventListener('scroll', function(event) {
    // console.log(isInViewport(findMe));
    if (isInViewport(findMe)) {
      // console.log(isInViewport(findMe));
      // console.log('i see');
      // if (!eventStatus) {
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
      //   eventStatus = true;
      // }
    }
  }, false);

  // window.addEventListener("scroll", onScroll);
  // document.body.addEventListener("touchmove", onScroll);


  // function onEntry(entry) {
  //   entry.forEach(change => {
  //     if (change.isIntersecting) {
  //       // change.target.classList.add('element-show');
  //       onscroll;
  //     }
  //   });
  // }
  
  // let options = { threshold: [0.5] };
  // let observer = new IntersectionObserver(onEntry, options);
  // let elements = document.querySelectorAll('.main-servicii__info');
  // for (let elm of elements) {
  //   observer.observe(elm);
  // }





}
