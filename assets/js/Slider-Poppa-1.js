// Can also be used with $(document).ready()
$(document).ready(function() {
  $('.slider').flexslider({
    easing: "swing",
    animation: "slide",
    slideshowSpeed: 9000,
    animationSpeed: 900,
    startAt: 0,
    initDelay: 0,
    controlNav: false,
    pausePlay: false,
    mousewheel: false,
    rtl: true,
    asNavFor:'.flexslider',
      
      
  });
});
