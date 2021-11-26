  // preloader
  var preloader = $(".preloader");
  function loadfun() {
    preloader.css("display","none")
  }
 
  // preloader
$(function () {
  // coundown timer
  $(".future_date").each(function () {
    $(this).countdowntimer({
      dateAndTime: "2000/01/01 00:00:00",
      size: "sm",
      labelsFormat: true,
      timeUp: function () {
        $(".countdowntimer").each(function () {
          $(this).html(
            "<p class ='timesup_text position-absolute bg-warning p-2 rounded text-dark'>پیشنهاد ویژه این محصول به پایان رسیده!</p>"
          );
        });
        $(".offers-overlay").addClass(" w-100 h-100 position-absolute");
      },
    });
  });
  //countdown timer


  //product_offer_img_hover
  $(".offer-product-img-wrapper").hover(
    function () {
      // $(this).children(".offer-product-side-1").css("transform", "translateY(-350px)"); //effect-1
      $(this)
        .children(".offer-product-side-2")
        .css("transform", "translateY(0)");
    },
    function () {
      // $(this).children(".offer-product-side-1").css("transform", "translateY(0)"); //effect-1
      $(this)
        .children(".offer-product-side-2")
        .css("transform", "translateY(350px)");
    }
  );
  //product_offer_img_hover


  // img slider #1
  $("#owl-carousel-1,#owl-carousel-3").owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    dots: false,
    center:true,
    items: 4,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplay: true,
    slideBy:3,
    responsive: {
      0: {
        items: 1,
         slideBy:1,
      },
      600: {
        items: 1,
         slideBy:1,
      },
      700: {
        items: 2,
         slideBy:1,
        },
        1000: {
          items: 3,
          slideBy:1,
      },
      1200: {
        items:4,
      },
    },
  });
  $("#owl-carousel-2,#owl-carousel-4").owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    dots: false,
    center:true,
    items: 4,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplay: true,
    slideBy:3,
    responsive: {
      0: {
        items: 1,
         slideBy:1,
      },
      600: {
        items: 1,
         slideBy:1,
      },
      700: {
        items: 2,
         slideBy:1,
        },
        1000: {
          items: 3,
          slideBy:1,
      },
      1200: {
        items:4,
      },
    },
  });
  // img slider #1


  // sign in modal
  $('#main-sign-in-modal').on('shown.bs.modal', function () {
    $(this).find('input[autofocus]').focus();
  });
  // sign in modal


  // popovers
  $('[data-toggle="popover"]').popover();
  // popovers


  // zoomy slider
  var imgUrls = [
    '../img/s1.jpg',
    '../img/s2.jpg',
    '../img/s3.jpg',
    '../img/s4.jpg',
  ]
  $('#zommy-product-slideshow').zoomy(imgUrls, {
    width: 700,
    height: 550,
    

  });
  // zoomy slider
});



