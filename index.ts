interface Company {
  nome: string,
  fundacao: number,
  pais: string,
};

interface Product {
  nome: string,
  preco: number,
  descricao: string,
  garantia: string,
  seguroAcidentes: boolean,
  empresaFabricante: Company,
  empresaMontadora: Company,
};

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');

  const data = await response.json();
  showProduct(data);
}

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>

      <div>
        <h3>${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}

fetchProduct();
