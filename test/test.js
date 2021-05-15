"use strict";

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

const Divcontainers = document.querySelectorAll(".container");

const containers = Array.from(Divcontainers);
let currentNumber = 0;

function handleprevBtn(event) {
  console.log("hi");
  currentNumber -= 1;

  if (currentNumber < 0) {
    currentNumber = containers.length - 1;
  }
  console.log(containers[currentNumber]);
}

function init() {
  console.log(prevBtn);
  prevBtn.addEventListener("click", handleprevBtn);
}

init();
