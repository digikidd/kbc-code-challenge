$(document).ready(function() {


  $(window).scroll(function () {
      
      var height = $(window).height();
   
    if ($(window).scrollTop() > height) {
      $('#navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < height + 1) {
      $('#navbar').removeClass('navbar-fixed');
    }
  });












});