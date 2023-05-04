const input_text = document.querySelector('input');

const total = localStorage.getItem('total');

if (input_text && total) {
  input_text.value = total;
  calculateBonus(Number(input_text.value));
}

function calculateBonus(value: number) {
  const result_element = document.querySelector('p');

  if (result_element) {
    result_element.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalChanged() {
  if (input_text) {
    localStorage.setItem('total', input_text.value);
    calculateBonus(Number(input_text.value));
  }
}

if (input_text) {
  input_text.addEventListener('keyup', totalChanged);
}
