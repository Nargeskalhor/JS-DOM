"use strict";
const container = document.querySelector(".container");
const buttonT = document
  .querySelector(".btn")
  .addEventListener("click", function () {
    for (let i = 1; i <= 5; i++) {
      const html = `<p>item ${i}</p>`;
      container.insertAdjacentHTML("beforeend", html);
    }
    if (buttonT) {
    }
  });
const button = document
  .querySelector(".btn-R")
  .addEventListener("click", function () {
    document.querySelector(".container").innerHTML = "";
  });
