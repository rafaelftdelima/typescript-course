"use strict";
const btn_mobile = document.querySelector('#btn-mobile');
function toggleMenuMobile() {
    const parentElement = this.parentElement;
    if (parentElement) {
        if (parentElement.classList.contains('active')) {
            parentElement.classList.remove('active');
            this.setAttribute('aria-label', 'Abrir menu');
            this.setAttribute('aria-expanded', 'false');
        }
        else {
            parentElement.classList.add('active');
            this.setAttribute('aria-label', 'Fechar menu');
            this.setAttribute('aria-expanded', 'true');
        }
    }
}
if (btn_mobile) {
    btn_mobile.addEventListener('click', toggleMenuMobile);
    btn_mobile.addEventListener('', toggleMenuMobile);
}
