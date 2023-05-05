"use strict";
const button = document.querySelector('button');
function handleClick(event) {
    console.log(event.pageX);
}
button?.addEventListener('pointerdown', handleClick);
function handleScroll(event) {
    console.log(event);
}
window.addEventListener('scroll', handleScroll);
