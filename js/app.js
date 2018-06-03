  var els = document.querySelectorAll(".js-menu-itemLink");
  var header = document.querySelector(".header-container");
  var section = document.querySelectorAll(".section--detail");
  var navigation = document.querySelectorAll(".js-menu-itemLink");

  els.forEach(function (element){
    element.addEventListener("click", function(){
      header.classList.add('is-active')

      section.forEach(function(e) {
        e.classList.remove('is-active')
      });

      document.querySelector('#'+this.dataset.href).classList.add('is-active')

      navigation.forEach(function(e) {
        e.classList.remove('is-active')
      });
      this.classList.add('is-active')
    });
  });


  var ps = new PerfectScrollbar('.js-scroll',{
    maxScrollbarLength: 100
  });
  var ps = new PerfectScrollbar('.section--detailCV',{
    maxScrollbarLength: 100
  });
  var ps = new PerfectScrollbar('.section--detailPhoto',{
    maxScrollbarLength: 100
  });

  var lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  