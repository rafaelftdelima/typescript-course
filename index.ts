type device = {
  name: string,
  price: number,
  keyboard: boolean,
}

function fillerData(data: device) {
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

type categories = 'design' | 'code' | 'UX';

function printCategory(category: categories) {
  console.log(category);
}

printCategory('security');
