$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // jQuery Smooth Scrolling
  $(".navbar a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });

  //Get back to top button

  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    // Show button after 100px
    var showAfter = 100;
    if ($(this).scrollTop() > showAfter) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  //Click event to scroll to top
  $("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  $(".gallery").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: "a", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });
  // Hide navbar when scroll down but show when scroll up
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;

  //   // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  //   if (currentScrollPos > 20) {
  //     // I am using 'display' instead of 'top':
  //     document.getElementById("nav-scroll").style.display = "none";
  //   } else {
  //     document.getElementById("nav-scroll").style.display = "initial";
  //   }
  // };
});
