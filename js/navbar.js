$(document).scroll(function() {
  if ($(this).scrollTop() >= $("#contact").offset().top - 120) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#links").offset().top - 120) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#pseudo").offset().top - 120) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#history").offset().top - 120) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#symbolic-execution").offset().top - 120) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#about").offset().top - 120) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
  } else {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
  }
});

$(document).scroll(function() {
  if ($(this).scrollTop() >= $("#contact").offset().top - 120) {
    $('.navbar-brand').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#links").offset().top - 120) {
    $('.navbar-brand').css({"color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#pseudo").offset().top - 120) {
    $('.navbar-brand').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#history").offset().top - 120) {
    $('.navbar-brand').css({"color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#symbolic-execution").offset().top - 120) {
    $('.navbar-brand').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#about").offset().top - 120) {
    $('.navbar-brand').css({"color": "#f8f9fa"});
  } else {
    $('.navbar-brand').css({"color": "#222"});
  }
});

$(document).scroll(function() {
  if ($(this).scrollTop() >= $("#contact").offset().top - 120) {
    $('nav').css({"background-color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#links").offset().top - 120) {
    $('nav').css({"background-color": "#222"});
  } else if ($(this).scrollTop() >= $("#pseudo").offset().top - 120) {
    $('nav').css({"background-color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#history").offset().top - 120) {
    $('nav').css({"background-color": "#222"});
  } else if ($(this).scrollTop() >= $("#symbolic-execution").offset().top - 120) {
    $('nav').css({"background-color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#about").offset().top - 120) {
    $('nav').css({"background-color": "#222"});
  } else {
    $('nav').css({"background-color": "#f8f9fa"});
  }
});
