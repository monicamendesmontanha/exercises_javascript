console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.1]----------------------------------------------------------------");
// 2.1 Faça um Programa que peça dois números e imprima o maior deles.

const maiorNumero = (n1,n2) => {
  if (n1 > n2) {
    return `${n1} é maior que ${n2}`
  } else {
    return `${n2} é maior que ${n1}`
  }
}

console.log(maiorNumero(5,3));
console.log(maiorNumero(10,20));