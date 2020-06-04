var redButton = document.getElementById("red");
var yellowButton = document.getElementById("yellow");
var lightButton = document.getElementById("light");
var body = document.body;

var theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

redButton.onclick = () => {
  body.classList.replace("yellow", "red");

  localStorage.setItem("theme", "red");
};
yellowButton.onclick = () => {
  body.classList.replace("red", "yellow");

  localStorage.setItem("theme", "yellow");
};
