"use strict";
function fillerData(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.name}</h2>
      <p>${data.price}</p>
      <p>Include keyboard: ${data.keyboard ? 'Sim' : 'Não'}</p>
    </div>
  `;
}
fillerData({
    name: 'RedDragon',
    price: 249.47,
    keyboard: true
});
function printCategory(category) {
    console.log(category);
}
printCategory('security');
