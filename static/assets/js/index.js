


const swiper5 = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 1.6,
  spaceBetween: 16,
  loop: true,


  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 16,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
})



$(window).scroll(function() {
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 50) {
        //console.log('a');
        $("body").addClass("has-stick");
    } else {
        //console.log('a');
        $("body").removeClass("has-stick");
    }
});

$(document).ready(function () {


  $(".menu-mobile").click(function () {
    $(".menu-mobile").toggleClass("open ");

    $("body").toggleClass("open ");

  });

  ("use strict");






});


