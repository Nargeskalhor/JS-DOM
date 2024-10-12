"use strict";
const text = document.querySelector(".text");
const addTask = document.querySelector(".addTask");
const cearlAll = document.querySelector(".cearlAll");

addTask.addEventListener("click", function () {
  const text = text.value.trim();
});
if (text === "") {
  alert = "Please enter a task";
} else {
  const task = document.querySelector(".task");
  task.textContent = text;

  const remove = document.querySelector(".button");
  cearlAll.textContent = "delete";
  remove.classList.add("remove");
  task.append(remove);
  task.append(li);
  text.value = "";

  cearlAll.addEventListener("click", function () {
    task.remove(li);
  });
}
