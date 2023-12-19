"use strict";

const buttons = document.querySelectorAll(".btn");
const descriptions = document.querySelectorAll(".description");
const imgs = document.querySelectorAll(".more");
const imgPlus = "/assets/images/icon-plus.svg";
const imgMinus = "/assets/images/icon-minus.svg";

for (let i = 0; i < buttons.length; i++) {
    function toggleDescription() {
        descriptions[i].classList.toggle("hidden");
        
        const currentSrc = imgs[i].getAttribute("src");

        if (currentSrc === imgPlus) {
            imgs[i].setAttribute("src", imgMinus);
        } else {
            imgs[i].setAttribute("src", imgPlus);
        }
    }

    buttons[i].addEventListener("click", toggleDescription);
}
