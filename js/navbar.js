$(document).scroll(function() {
  if ($('button').attr("aria-expanded") == "true") {
    var overlap = 335;
  } else {
    var overlap = 120;
  }

  if ($(this).scrollTop() >= $("#contact").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
    $('.navbar-brand').css({"color": "#f8f9fa"});
    $('nav').css({"background-color": "#222"});
    $('#title > a').css({"color": "#f8f9fa"})
    $('#topid > a').css({"color": "#f8f9fa"});
    $('.klee-icon').attr("src","./assets/kleeIconWhite192x192.png");
  } else if ($(this).scrollTop() >= $("#links").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
    $('.navbar-brand').css({"color": "#222"});
    $('nav').css({"background-color": "#f8f9fa"});
    $('#title > a').css({"color": "#222"})
    $('#topid > a').css({"color": "#222"});
    $('.klee-icon').attr("src","./assets/kleeIcon192x192.png");
  } else if ($(this).scrollTop() >= $("#pseudo").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
    $('.navbar-brand').css({"color": "#f8f9fa"});
    $('nav').css({"background-color": "#222"});
    $('#title > a').css({"color": "#f8f9fa"})
    $('#topid > a').css({"color": "#f8f9fa"});
    $('.klee-icon').attr("src","./assets/kleeIconWhite192x192.png");
  } else if ($(this).scrollTop() >= $("#resumable").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
    $('.navbar-brand').css({"color": "#222"});
    $('nav').css({"background-color": "#f8f9fa"});
    $('#title > a').css({"color": "#222"})
    $('#topid > a').css({"color": "#222"});
    $('.klee-icon').attr("src","./assets/kleeIcon192x192.png");
  } else if ($(this).scrollTop() >= $("#symbolic-execution").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
    $('.navbar-brand').css({"color": "#f8f9fa"});
    $('nav').css({"background-color": "#222"});
    $('#title > a').css({"color": "#f8f9fa"})
    $('#topid > a').css({"color": "#f8f9fa"});
    $('.klee-icon').attr("src","./assets/kleeIconWhite192x192.png");
  } else if ($(this).scrollTop() >= $("#about").offset().top - overlap) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
    $('.navbar-brand').css({"color": "#222"});
    $('nav').css({"background-color": "#f8f9fa"});
    $('#title > a').css({"color": "#222"})
    $('#topid > a').css({"color": "#222"});
    $('.klee-icon').attr("src","./assets/kleeIcon192x192.png");
  } else {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
    $('.navbar-brand').css({"color": "#f8f9fa"});
    $('nav').css({"background-color": "#6d777f"});
    $('#title > a').css({"color": "#f8f9fa"})
    $('#topid > a').css({"color": "#f8f9fa"});
    $('.klee-icon').attr("src","./assets/kleeIconWhite192x192.png");
  }
});
