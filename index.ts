const button = document.querySelector('button');

function handleClick(event: PointerEvent) {
  console.log(event.pageX);
}

button?.addEventListener('pointerdown', handleClick);

function handleScroll(event: Event) {
  console.log(event);
}

window.addEventListener('scroll', handleScroll);
