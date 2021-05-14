"use strict";

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

const boxDivs = document.querySelectorAll(".box");

let boxes = [];

function handleLeftBtn(event) {}

function loadBox() {
  boxes = Array.from(boxDivs);
  currentBox = boxes[0];

  leftBtn.addEventListener("click", handleLeftBtn);
}

function init() {
  loadBox();
}

init();
