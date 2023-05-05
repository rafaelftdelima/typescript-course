"use strict";
const button = document.querySelector('button');
function handleClick(event) {
    console.log(this);
}
button?.addEventListener('click', handleClick);
