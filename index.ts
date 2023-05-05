const links = document.querySelectorAll('.link');

function changeColorAndBorder(element: HTMLElement) {
  element.style.color = '#fb5';
  element.style.border = '2px solid #fb5';
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    changeColorAndBorder(link);
  }
})
