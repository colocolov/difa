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
