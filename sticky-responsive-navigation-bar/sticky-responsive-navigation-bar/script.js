/* Begin jQuery */ (function ($) {
  $(window).scroll(function (e) {
    if ($(window).scrollTop() >= $("header").height() + 30) {
      $(".sticky").addClass("fixed");
      $(".content").addClass("margin");
    } else {
      $(".sticky").removeClass("fixed");
      $(".content").removeClass("margin");
    }
    e.stopPropagation();
  });
  $(function () {
    $("#nav-toggle").click(function () {
      $("nav ul").toggle();
    });
    $("#nav-toggle-2").click(function () {
      $(".section2 nav ul").toggle();
    });
    document
      .querySelector("#nav-toggle")
      .addEventListener("click", function () {
        this.classList.toggle("active");
      });
    document
      .querySelector("#nav-toggle-2")
      .addEventListener("click", function () {
        this.classList.toggle("active");
      });
    $("nav ul li > a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    $(".owl-carousel").owlCarousel({
      autoplay: true,
      lazyLoad: true,
      loop: true,
      margin: 20,
      /*
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      */
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },

        600: {
          items: 3,
        },

        1024: {
          items: 4,
        },

        1366: {
          items: 4,
        },
      },
    });
    $(".head-box span").click(function () {
      $(".head-box span").removeClass("active");
      $(this).addClass("active");
      $(".panel-box table").hide();
      $(".panel-box .table-" + $(this).attr("id")).show();
      $(".section3").attr(
        "style",
        "background:linear-gradient(#0d0f4e3d, #0000), url(images/la-" +
          $(this).attr("id") +
          ".jpg);background-size:cover;background-position: top;"
      );
    });
    window.onscroll = function () {
      myFunction();
    };
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  });
})(jQuery);
