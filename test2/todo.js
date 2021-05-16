"use strict"; /*

const div = document.querySelector("#todo1");

const getId = div.id;

function makeList(name) {
  let testArray = [name];
  console.log(testArray);
}

makeList(getId);
console.log(getId);
*/

const LISTS_LS = "lists";

function createNewList() {}

function loadLists() {
  const loadedLists = localStorage.getItem(LISTS_LS);
  if (loadedLists === null) {
    createNewList();
  } else {
    paintLists();
  }
}

function init() {
  loadLists();
}

init();
