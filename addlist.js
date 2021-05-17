"use strict";

const addListForm = document.querySelector(".js-addListForm"),
  addListInput = addListForm.querySelector("input");

const LISTS_LS = "lists";

let lists = [];

function saveLists() {
  localStorage.setItem(LISTS_LS, JSON.stringify(lists));
}

function addNewList() {
  addListForm.addEventListener("submit", submitNewList);
}

function paintLists(text) {
  const wrapperDiv = document.createElement("div");

  const mainDiv = document.createElement("div");

  const greetingContainer = document.createElement("div");
  const greetingForm = document.createElement("form");
  const greetingInput = document.createElement("input");

  const todoContainer = document.createElement("div");
  const todoForm = document.createElement("form");
  const todoInput = document.createElement("input");

  const listId = lists.length + 1;

  mainDiv.classList.add("main");

  greetingContainer.classList.add("main__greeting");
  greetingForm.classList.add("js-greetingForm");
  greetingInput.type = "text";
  greetingInput.placeholder = "Enter name";
  greetingInput.required = true;

  greetingForm.appendChild(greetingInput);
  greetingContainer.appendChild(greetingForm);

  todoContainer.classList.add("main__todo");
  todoForm.classList.add("js-todoForm");
  todoInput.type = "text";
  todoInput.placeholder = "to do";
  todoInput.minLength = 1;
  todoInput.maxLength = 70;
  todoInput.required = true;

  todoForm.appendChild(todoInput);
  todoContainer.appendChild(todoForm);

  mainDiv.appendChild(greetingContainer);
  mainDiv.appendChild(todoContainer);

  wrapperDiv.appendChild(mainDiv);

  wrapperDiv.id = `js-wrapper${listId}`;
  wrapperDiv.classList.add("wrapper");
  document.body.appendChild(wrapperDiv);

  const newListObj = {
    name: text,
    id: listId,
  };
  lists.push(newListObj);
  saveLists();
}

function submitNewList(event) {
  event.preventDefault();
  const currentValue = addListInput.value;
  paintLists(currentValue);
  addListInput.value = "";
}

function loadLists() {
  const loadedLists = localStorage.getItem(LISTS_LS);
  if (loadedLists === null) {
    addNewList();
  } else {
    const parsedLists = JSON.parse(loadedLists);
    parsedLists.forEach(function (list) {
      paintLists(list.name);
    });
  }
}

function init() {
  loadLists();
}

init();
