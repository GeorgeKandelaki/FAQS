"use strict";

let buttons = document.querySelectorAll(".btn");
let descriptions = document.querySelectorAll(`.description`);
let imgs = document.querySelectorAll(".more");
let img1 = "/assets/images/icon-plus.svg";
let img2 = "/assets/images/icon-minus.svg";
console.log(buttons);
console.log(descriptions);
console.log(imgs);

for (let i = 0; i < buttons.length; i++) {
    function MoreLess() {
        descriptions[i].classList.toggle("hidden");
        const currentSrc = imgs[i].getAttribute("src");
        // imgs[i].src = img1; part of idk thing
        console.log(currentSrc);

        if (currentSrc === img1) {
            imgs[i].setAttribute("src", img2);
        } else {
            imgs[i].setAttribute("src", img1);
        }

        // I Dont know how to make that work
        // if (imgs[i].src === img1) {
        //     imgs[i].src = img2;
        // } else if (imgs[i].src === img2) {
        //     imgs[i].src = img1;
        // }

        // imgs[i].src = imgs.src === img1 ? img2 : img1;
        // function chImg() {
        // }
        // buttons[i].addEventListener("click", chImg);
    }
    buttons[i].addEventListener("click", MoreLess);
}
