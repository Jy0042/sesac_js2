document.addEventListener("DOMContentLoaded", () => {
  fetch("/products")
    .then((response) => response.json())
    .then((products) => displayProducts(products));

  fetch("/cart")
    .then((response) => response.json())
    .then((products) => displayCart(products));
});

function displayProducts(products) {
  // 여기다가 돔 요소 가져와서 tbody 에 상품 목록 출력해보기
  const productTableBody = document.querySelector("#productsTable tbody");

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td><button onclick='addToCart(${product.id})'>담기</button></td>
    `;
    productTableBody.appendChild(row);
  });
}

function displayCart(products) {
  const cartTableBody = document.querySelector("#cartTable tbody");
  console.log(products);
  console.log("cartTableBody", cartTableBody);

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    `;
    cartTableBody.appendChild(row);
  });
}

function addToCart(productId) {
  fetch(`/add-to-cart/${productId}`, { method: "POST" });
  // TODO: 나중에 성공/실패 등등 확인하는 코드 작성
}
