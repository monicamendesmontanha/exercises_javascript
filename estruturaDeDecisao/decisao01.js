console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.1]-----------------------------------------------------------------");
// 2.1 Faça um Programa que peça dois números e imprima o maior deles.

const maiorNumero = (n1,n2) => {
  if (n1 > n2) {
    return `${n1} é maior que ${n2}`;
  } else {
    return `${n2} é maior que ${n1}`;
  }
}

console.log(maiorNumero(5,3));
console.log(maiorNumero(10,20));

console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.2]-----------------------------------------------------------------");
// 2.2 Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

const positivoOuNegativo = (valor) => {
  if (valor >= 0) {
    return `${valor} é positivo`;
  } else {
  return `${valor} é negativo`;
  }
}

console.log(positivoOuNegativo(5));
console.log(positivoOuNegativo(-10));