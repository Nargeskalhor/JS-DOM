"use strict";
const pElement = document.querySelectorAll("p");
pElement.forEach((Element, i) => {
  Element.textContent = `paragraph ${i + 1}`;
  Element.style.backgroundColor = "lightblue";
});

// // for (let i = 0; i < pElement.length; i++) {}
// pElement.forEach(function (paragraf1) {
//   console.log(pElement.textContent);
// });

// document.querySelector("p").textContent = "paragraf1";
// document.querySelector("p").style.backgroundColor = "blue";

// //   console.log(pElement[i].textContent);
