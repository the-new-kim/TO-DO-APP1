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
  const listId = lists.length + 1;
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
