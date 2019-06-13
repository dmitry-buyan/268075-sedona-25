var button = document.querySelector(".button-optional");
var popup = document.querySelector(".search__form");
var arrival = popup.querySelector("#arrival");
var leave = popup.querySelector("#leave");
var adultAmount = popup.querySelector("#adult");
var childrenAmount = popup.querySelector("#children");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("search__form--disable");
  arrival.focus();
});

popup.addEventListener("submit", function(evt) {
  if (!arrival.value || !leave.value || !adultAmount.value || !childrenAmount.value) {
    evt.preventDefault();
    popup.classList.add("search__form--error");
  }
});
