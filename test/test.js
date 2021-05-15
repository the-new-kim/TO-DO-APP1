"use strict";

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let currentNumber = 0;

const SHOWING_CL = "showing";
const HIDING_CL = "hiding";

function displaySlide(number) {
  const DivContainers = document.querySelectorAll(".container");
  const containers = Array.from(DivContainers);

  if (number > containers.length) {
    currentNumber = 0;
  }
  if (number < 0) {
    currentNumber = containers.length - 1;
  }
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.add(HIDING_CL);
  }
  containers[currentNumber].classList.remove(HIDING_CL);
}

function init() {
  displaySlide(currentNumber);
}

init();

/*
 <script type="text/javascript">  
        var slide_index = 1;  
        displaySlides(slide_index);  
  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  
    </script>  

*/
