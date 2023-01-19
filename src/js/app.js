require("../css/app.css");
require("../scss/style.scss");

/********** Paste your code here! ************/

$(document).ready(function () {
  $(".video-item").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
});
$(window).on("load", () => {
  $("#loader").fadeOut();
});
$(".items span").on("click", () => {
  $("html, body").animate({ scrollTop: "0" });
});
$(window).on("scroll", () => {
  if ($(window).scrollTop() > 0) {
    $("header").addClass("isScrolling");
  } else {
    $("header").removeClass("isScrolling");
  }
});
