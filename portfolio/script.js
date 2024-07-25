$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

$(document).ready(function () {
  // Lightbox functionality
  $(".project-item img").on("click", function () {
    let imgUrl = $(this).attr("src");
    $("body").append(
      `<div class="lightbox"><img src="${imgUrl}" alt="Project Image" /></div>`
    );
    $(".lightbox").fadeIn();
  });

  // Close lightbox on clicking outside the image
  $(document).on("click", ".lightbox", function () {
    $(this).fadeOut(function () {
      $(this).remove();
    });
  });
});
// new
// Smooth scrolling when clicking on navigation links
$('.menu a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  var target = $(this.hash);
  $("html, body").animate(
    {
      scrollTop: target.offset().top,
    },
    1000
  );
});

var typed2 = new Typed(".typing-2", {
  strings: ["WEB DEVELOPER", "FRONTEND ENGINEER"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Scroll to top button
$(".scroll-up-btn").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
