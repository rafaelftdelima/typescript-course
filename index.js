"use strict";
const button = document.querySelector('button');
function handleClick(event) {
    const element = event.currentTarget;
    if (element instanceof HTMLElement) {
        console.log(element.innerHTML);
    }
}
button?.addEventListener('click', handleClick);
