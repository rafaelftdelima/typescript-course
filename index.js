"use strict";
function activeMenu(event) {
    if (event instanceof MouseEvent) {
        console.log(event.pageX);
    }
    if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
    }
}
document.documentElement.addEventListener('mousedown', activeMenu);
document.documentElement.addEventListener('touchstart', activeMenu);
window.addEventListener('keydown', activeMenu);
