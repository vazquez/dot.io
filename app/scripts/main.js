$(function() {
    'use strict';
    var windowHeight = $(window).height();
    // $('.hero-unit').css('min-height', windowHeight);
    $('.hero-unit h1').eq(0).hide().delay(500).fadeIn(1000);
    $('.hero-unit h1').eq(1).hide().delay(1500).fadeIn(1000);
    $('.hero-unit h1').eq(2).hide().delay(2500).fadeIn(1000);
    $('.hero-unit h1').eq(3).hide().delay(3500).fadeIn(1000);
});
