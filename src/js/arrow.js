(function () {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = 200;

    if (scrolled > coords) {
      goTopBtn.classList.add('scrollup-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('scrollup-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  const goTopBtn = document.querySelector('.scrollup');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
