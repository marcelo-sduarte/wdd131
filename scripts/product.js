const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

createProduct(products);

function createProduct(filteredProduct) {
  filteredProduct.forEach(products => {
    // Cria elementos HTML
    let product = document.createElement("option");
    // Atribui os valores
    product.textContent = products.name;
    product.value = products.id;
    // Adiciona o elemento ao select
    document.querySelector("#product").append(product);
  });
}


// Função que lida com o evento de submit no formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formProduct");

  if (form) { // Verifica se o formulário existe (na página principal)
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Previne o recarregamento da página

      // Obter o número de visitas armazenadas
      let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

      // Incrementar o número de visitas
      numVisits++;

      // Armazenar o novo total de visitas no localStorage
      window.localStorage.setItem("numVisits-ls", numVisits);

      // Redirecionar para a página de confirmação
      window.location.href = "review.html"; // Nome da sua página de confirmação
    });
  }
});











