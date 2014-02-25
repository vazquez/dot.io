(function() {
  $(function() {
    "use strict";
    $(".hero-unit article").eq(0).hide().delay(500).fadeIn(1000);
    $(".hero-unit article").eq(1).hide().delay(1500).fadeIn(1000);
    $(".hero-unit article").eq(2).hide().delay(2500).fadeIn(1000);
    $(".hero-unit article").eq(3).hide().delay(3500).fadeIn(1000);
    $(".hero-unit article").fitText(1.7, {
      minFontSize: "20px"
    });
    $(".heading").fitText(0.9);
    $("nav").delay(2000).addClass("visible");
  });

}).call(this);
