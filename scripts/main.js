var bg = document.getElementById("bg-parallax");
var bar = document.getElementById("bar-parallax");
var main = document.getElementById("main-parallax");
var text = document.getElementById("text-parallax");
var nav = document.getElementById("nav-parallax");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  bg.style.top = value * 0.5 + "px";
  bar.style.left = value * -2 + "px";
  nav.style.left = value * -2 + "px";
  bar.style.top = value * 0.5 + "px";
  nav.style.top = value * 0.5 + "px";
  main.style.top = value * -0 + "px";
  text.style.top = value * 0.5 + "px";
});
