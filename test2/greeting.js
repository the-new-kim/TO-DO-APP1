"use strict";

const greetingForm = document.querySelector(".js-greetingForm"),
  greetingInput = greetingForm.querySelector("input"),
  greetingTextContainer = document.querySelector(".js-greetingText");

const todoContainer = document.querySelector(".main__todo");

const USER_LS = "currentUser";

const SHOWING_CL = "showing",
  HIDING_CL = "hiding";

function handleSubmit(event) {
  event.preventDefault();
  const currentUser = greetingInput.value;
  localStorage.setItem(USER_LS, currentUser);
  paintGreeting(currentUser);
  greetingInput.value = "";
  todoContainer.classList.add(SHOWING_CL);
  todoContainer.classList.remove(HIDING_CL);
}

function askForName() {
  greetingForm.classList.add(SHOWING_CL);
  greetingForm.classList.remove(HIDING_CL);
  greetingTextContainer.classList.add(HIDING_CL);
  greetingTextContainer.classList.remove(SHOWING_CL);

  greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greetingForm.classList.add(HIDING_CL);
  greetingForm.classList.remove(SHOWING_CL);
  greetingTextContainer.classList.add(SHOWING_CL);
  greetingTextContainer.classList.remove(HIDING_CL);

  greetingTextContainer.innerText = `Hello 
  ${text} ☺`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    askForName();
    todoContainer.classList.add(HIDING_CL);
    todoContainer.classList.remove(SHOWING_CL);
  } else {
    paintGreeting(currentUser);
    todoContainer.classList.add(SHOWING_CL);
    todoContainer.classList.remove(HIDING_CL);
  }
}

function init() {
  loadName();
}
init();
