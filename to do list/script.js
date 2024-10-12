"use strict";
const inputText = document.querySelector(".inputText");
const addTask = document.querySelector(".addTask");
const cearlAll = document.querySelector(".cearlAll");
const task = document.querySelector(".task");
addTask.addEventListener("click", function () {
  const text = "";
  if (text === "") {
    alert = "Please enter a task";
  } else {
    const ul = document.querySelector(".task");
    ul.textContent = text;
    const remove = document.querySelector(".button");
    remove.textContent = "delete";
    inputText.value = "";

    remove.addEventListener("click", function () {
      task.remove(ul);
    });
  }
});
cearlAll.addEventListener("click", function () {
  task.innerHTML = "";
});
