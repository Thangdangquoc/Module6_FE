/*
Template Name: Osahan Eat - Online Food Ordering Website HTML Template
Version: 1.0
*/
(function ($) {
  "use strict"; // Start of use strict

  // ===========Select2============
  $('select').select2();

  // ===========My Account Tabs============
  $(window).on('hashchange', function () {
    var url = document.location.toString();
    if (url.match('#')) {
      //$('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
      $('a[href="' + window.location.hash + '"]').trigger('click');
    }
    $('.nav-tabs a').on('shown', function (e) {
      window.location.hash = e.target.hash;
    })
  });
  var url = document.location.toString();
  if (url.match('#')) {
    //$('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
    $('a[href="' + window.location.hash + '"]').trigger('click');
  }
  // Change hash for page-reload
  $('.nav-tabs a').on('shown', function (e) {
    window.location.hash = e.target.hash;
  })

  // Category Owl Carousel
  const objowlcarousel = $('.owl-carousel-category');
  if (objowlcarousel.length > 0) {
    objowlcarousel.owlCarousel({
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 6,
        },
        1200: {
          items: 8,
        },
      },
      loop: true,
      lazyLoad: true,
      autoplay: true,
      dots: false,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    });
  }

  // Homepage Owl Carousel
  var fiveobjowlcarousel = $(".owl-carousel-four");
  if (fiveobjowlcarousel.length > 0) {
    fiveobjowlcarousel.owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },

      lazyLoad: true,
      pagination: false,
      loop: true,
      dots: false,
      autoPlay: 2000,
      nav: true,
      stopOnHover: true,
      navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"]
    });
  }

  // Owl Carousel Five
  var fiveobjowlcarousel = $(".owl-carousel-five");
  if (fiveobjowlcarousel.length > 0) {
    fiveobjowlcarousel.owlCarousel({
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
      lazyLoad: true,
      pagination: false,
      loop: true,
      dots: false,
      autoPlay: 2000,
      nav: true,
      stopOnHover: true,
      navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"]
    });
  }

  // Homepage Ad Owl Carousel
  const mainslider = $('.homepage-ad');
  if (mainslider.length > 0) {
    mainslider.owlCarousel({
      responsive: {
        0: {
          items: 2,
        },
        764: {
          items: 2,
        },
        765: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
      lazyLoad: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      autoplayTimeout: 2000,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      autoplayHoverPause: true,
    });
  }

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();



  //
  // $("body").on("contextmenu", function (e) {
  //   return false;
  // });
  $(document).keydown(function (e) {
    //  if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)){
    //    return false;
    //  }
    //  if(e.which === 123){
    //      return false;
    //  }
    //  if(e.metaKey){
    //      return false;
    //  }
    //  //document.onkeydown = function(e) {
    //  // "I" key
    //  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    //      return false;
    //  }
    //  // "J" key
    //  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    //      return false;
    //  }
    //  // "S" key + macOS
    //  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    //      return false;
    //  }
    //  if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    //      return false;
    //  }
    //  // "U" key
    //  if (e.ctrlKey && e.keyCode == 85) {
    //     return false;
    //  }
    //  // "F12" key
    // //  if (event.keyCode == 123) {
    // //     return false;
    // //  }
  });

  $('.count-number button').on('click', function () {
    var button = $(this);
    var oldValue = button.parent().parent().find('input').val();
    if (button.hasClass('btn-plus')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    button.parent().parent().find('input').val(newVal);
  });

})(jQuery); // End of use strict
