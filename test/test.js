"use strict";

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

const boxDivs = document.querySelectorAll(".box");

let boxes = [];
let newNumber = 1;

function handleRightBtn(event) {
  if (newNumber >= boxes.length) {
    console.log("too big");
  } else {
    console.log((newNumber += 1));
  }
}

function handleLeftBtn(event) {
  newNumber--;
  const lastBox = boxes[boxes.length - 1];
  let currentBox = boxes[newNumber];
  if (newNumber <= 1) {
    currentBox = lastBox;
    console.log(currentBox);
  } else {
    console.log((newNumber -= 1));
  }
}

function loadBox() {
  boxes = Array.from(boxDivs);
  boxes[boxes.length - 1].innerText = newNumber;

  leftBtn.addEventListener("click", handleLeftBtn);
  rightBtn.addEventListener("click", handleRightBtn);
}

function init() {
  loadBox();
}

init();
