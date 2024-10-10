"use strict";
document.getElementById("button").addEventListener("click", function () {
  const input = document.getElementById("input").value;
  const pEl = document.getElementById("pEl");

  if (input === "") {
    pEl.style.color = "red";
    pEl.textContent = "please enter a value";
  } else {
    pEl.style.color = "blue";

    pEl.textContent = input;
  }
});
