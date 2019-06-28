console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.8]-----------------------------------------------------------------");
// 2.8 Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

const produtoMaisBarato = (prod1, prod2, prod3) => {

  if (prod1 < prod2 && prod1 < prod3) {
    return `O produto 1 o é mais barato. Valor: $${prod1.toFixed(2)}`;
  } else if (prod2 < prod1 && prod2 < prod3)  {
    return `O produto 2 o é mais barato. Valor: $${prod2.toFixed(2)}`;
  } else {
    return `O produto 3 o é mais barato. Valor: $${prod3.toFixed(2)}`;
  }
}

console.log(produtoMaisBarato(5.60, 10.15, 55.21));
console.log(produtoMaisBarato(15.30, 11.90, 50.98));
console.log(produtoMaisBarato(5.10, 20.70, 2.10));
