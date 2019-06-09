var button = document.querySelector(".button-optional");
var popup = document.querySelector(".search__form");
var arrival = popup.querySelector("#arrival");
var leave = popup.querySelector("#leave");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("search__form--disable");
  arrival.focus();
});

popup.addEventListener("submit", function(evt) {
  if (!arrival.value || !leave.value) {
    evt.preventDefault();
    console.log("Fill the required fiedls");
  }
});
