$(document).scroll(function() {
  if ($('button').attr("aria-expanded") == "true") {
    var overlap = 335;
  } else {
    var overlap = 120;
  }

  if ($(this).scrollTop() >= $("#links").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
    $('.navbar-brand').css({"color": "#222"});
    $('nav').css({"background-color": "#f8f9fa"});
    $('a').css({"color": "#222"});
    $('.klee-icon').attr("src","./assets/kleeIcon192x192.png");

  } else if ($(this).scrollTop() >= $("#pseudo").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
    $('.navbar-brand').css({"color": "#f8f9fa"});
    $('nav').css({"background-color": "#222"});
    $('a').css({"color": "#f8f9fa"});
    $('.klee-icon').attr("src","./assets/kleeIconWhite192x192.png");

  } else if ($(this).scrollTop() >= $("#resumable").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
    $('.navbar-brand').css({"color": "#222"});
    $('nav').css({"background-color": "#f8f9fa"});
    $('a').css({"color": "#222"});
    $('.klee-icon').attr("src","./assets/kleeIcon192x192.png");

  } else if ($(this).scrollTop() >= $("#symbolic-execution").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
    $('.navbar-brand').css({"color": "#f8f9fa"});
    $('nav').css({"background-color": "#222"});
    $('a').css({"color": "#f8f9fa"});
    $('.klee-icon').attr("src","./assets/kleeIconWhite192x192.png");

  } else if ($(this).scrollTop() >= $("#about").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
    $('.navbar-brand').css({"color": "#222"});
    $('nav').css({"background-color": "#f8f9fa"});
    $('a').css({"color": "#222"});
    $('.klee-icon').attr("src","./assets/kleeIcon192x192.png");

  } else {
<<<<<<< HEAD
    $('nav').css({"background-color": "#5d646d"});
=======
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
    $('.navbar-brand').css({"color": "#222"});
    $('nav').css({"background-color": "#f8f9fa"});
    $('a').css({"color": "#222"});
    $('.klee-icon').attr("src","./assets/kleeIcon192x192.png");

>>>>>>> 7d2d63861d2479423772d9ede28148c11ebe676c
  }
});