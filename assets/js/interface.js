(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Cookies
  -------------------------------------------------------------------------------*/
  function setCookie(cname, cvalue, days){

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
      var expires = "; expires=" + date.toGMTString();
    } else {
      var expires = "";
    }
    document.cookie = cname + "=" + cvalue + expires + "; path=/";
  }

  //Return a particular cookie
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //Checks if a cookie exists
  function checkCookie(cookieToCheck){
    var cookie = getCookie(cookieToCheck);
    if (cookie != "") {
      return true;
    }
    return false;
  }

  //Delet an existing cookie
  function deleteCookie( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  /*-------------------------------------------------------------------------------
  Newsletter popup close and set cookie
  -------------------------------------------------------------------------------*/
  $(".newsletter-popup-trigger").on('click', function(){
    setCookie('newsletter_popup_viewed', 'true');
  });

  $('#androNewsletterPopup').on('hidden.bs.modal', function () {
    setCookie('newsletter_popup_viewed', 'true');
  });

  $(window).on('load', function() {

    if(!checkCookie('newsletter_popup_viewed')){
      setTimeout(function(){
        $("#androNewsletterPopup").modal('show');
      }, 3000);
    }

  });

   /*-------------------------------------------------------------------------------
  Mobile Nav and Toggles
  -------------------------------------------------------------------------------*/
  $(".aside-trigger").on('click', function(){
    $("body").toggleClass('aside-open');
  });

  $(".aside-trigger-right").on('click', function(){
    $("body").toggleClass('aside-right-open');
  });

   $(".sigma_aside .menu-item-has-children > a").on('click', function(e) {
    var submenu = $(this).next(".sub-menu");
    e.preventDefault();

    submenu.slideToggle(200);
  });


  /*-------------------------------------------------------------------------------
  Search Trigger
  -------------------------------------------------------------------------------*/
  $(".search-trigger").on('click', function(e) {
    $(".search-form-wrapper").toggleClass('open');
  });

/*-------------------------------------------------------------------------------
    Sticky-Header
  -------------------------------------------------------------------------------*/
$(window).scroll(function(){
  var sticky = $('#header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

/*-------------------------------------------------------------------------------
  Progress bar on view
  -------------------------------------------------------------------------------*/
  $(".sigma_progress").each(function() {
    var progressBar = $(this).find(".progress-bar");
    var progressCount = $(this).find(".sigma_progress-count");
    $(progressBar).on('inview', function(event, isInView) {
      if (isInView) {
        $(progressBar).animate({
          width:$(progressBar).attr("aria-valuenow") + "%"
        });
        $(progressCount).animate({
          left:$(progressBar).attr("aria-valuenow") + "%"
        });
      }
    });
   });

/*-------------------------------------------------------------------------------
    Video
  -------------------------------------------------------------------------------*/
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
  $('.gallery-thumb').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });


/*-------------------------------------------------------------------------------
  Counter Js
-------------------------------------------------------------------------------*/

$(".counter").each(function() {
  var $this = $(this);
  $this.one('inview', function(event, isInView) {
    if (isInView) {
      $this.countTo({speed: 2000});
    }
  });
});

/*-------------------------------------------------------------------------------
  Map Trigger
  -------------------------------------------------------------------------------*/
  $(".map-marker").on('mouseover', function(){

    var parent = $(this).closest('.map-markers');
    parent.find('.active').removeClass('active');
    $(this).addClass('active');

  })

  /*-------------------------------------------------------------------------------
  Checkout Notices
  -------------------------------------------------------------------------------*/
   $(".andro_notice a").on('click', function(e){
     e.preventDefault();

     $(this).closest('.andro_notice').next().slideToggle();
   });

  /*-------------------------------------------------------------------------------
    Range Slider
  -------------------------------------------------------------------------------*/
  
  $(".js-range-slider").ionRangeSlider({
      type: "single",
      grid: true,
      min: 20,
      max: 1000,
      from: 200,
      to: 800,
      prefix: "$"
  });

/*-------------------------------------------------------------------------------
  Instagram Feed
  -------------------------------------------------------------------------------*/
  $('.widget-insta').each(function(){
    $.instagramFeed({
      'username': $(this).data('username'),
      'container': '#' + $(this).attr('id'),
      'display_profile': false,
      'display_biography': false,
      'display_gallery': true,
      'display_captions': false,
      'styling': false,
      'items': parseInt($(this).data('items')),
      'items_per_row': parseInt($(this).data('items_per_row')),
      'lazy_load': true,
    });
  });

/*------------------------------------------------------------------
  Intro-Slider
  -------------------------------------------------------------------*/

  $(".sigma_banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows:false,
        }
      }
    ]
  });

/*------------------------------------------------------------------
  Testimonials-Slider
  -------------------------------------------------------------------*/

  $(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows:false,
        }
      }
    ]
  });

/*------------------------------------------------------------------
  Portfolio-Slider
  -------------------------------------------------------------------*/

  $(".portfolio-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows:false,
        }
      }
    ]
  });

/*------------------------------------------------------------------
  Post Gallery Slider
  -------------------------------------------------------------------*/

  $(".post-img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false
  });

  /*------------------------------------------------------------------
  Testimonial Slider
  -------------------------------------------------------------------*/

  $(".sigma_testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false
  });

/*------------------------------------------------------------------
   Product Detail Slider
  -------------------------------------------------------------------*/

$(".sigma_product-slider-1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    asNavFor: '.sigma_product-slider-2'
  });

$(".sigma_product-slider-2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    asNavFor: '.sigma_product-slider-1',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });

/*------------------------------------------------------------------
  shop category slider
  -------------------------------------------------------------------*/

  $(".sigma_category-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*------------------------------------------------------------------
  product slider
  -------------------------------------------------------------------*/

  $(".sigma_product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.sigma_custom-arrows .slick-prev'),
    nextArrow: $('.sigma_custom-arrows .slick-next'),
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*------------------------------------------------------------------
  product slider
  -------------------------------------------------------------------*/

  $(".sigma_product-slider-3").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.sigma_custom-arrows .slick-prev'),
    nextArrow: $('.sigma_custom-arrows .slick-next'),
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
    Trending product Slider
  -------------------------------------------------------------------------------*/
  $(".sigma_trending-product-slider").slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    centerMode: true,
    centerPadding: 0,
    vertical: true,
    verticalScrolling: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  /*------------------------------------------------------------------
   Cart slider
  -------------------------------------------------------------------*/

  $(".sigma_cart-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.sigma_custom-arrows .slick-prev'),
    nextArrow: $('.sigma_custom-arrows .slick-next'),
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

/*------------------------------------------------------------------
  Sidebar-Menu
  -------------------------------------------------------------------*/
  $(".aside-trigger-right").on('click', function(e) {
   $("#sidebar_nav, #overlay_bg").toggleClass("show");
   });
   $("#overlay_bg").on('click', function(e) {
   $("#sidebar_nav, #overlay_bg").toggleClass("show");
   });

   /*------------------------------------------------------------------
  quantity plus minus
  -------------------------------------------------------------------*/

  $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('.quantity-box').find('input');
    var value = parseInt($input.val());
    if (value > 1) {
        value = value - 1;
    } else {
        value = 1;
    }
    $input.val(value);
});
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('.quantity-box').find('input');
    var value = parseInt($input.val());
    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
     }
    $input.val(value);
});


/*------------------------------------------------------------------
  Gallery
  -------------------------------------------------------------------*/
  $(window).on('load', function(){
    var $container = $('.galleryContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.galleryFilter a').on('click',function(){
        $('.galleryFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});

})(jQuery);
