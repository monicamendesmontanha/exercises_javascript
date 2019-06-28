console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.9]-----------------------------------------------------------------");
// 2.9 Faça um Programa que leia três números e mostre-os em ordem decrescente.


const maiorNumero = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num1 && num2 > num3) {
    return num2
  } else {
    return num3
  }
}

const menorNumero = (num1, num2, num3) => {
  if (num1 < num2 && num1 < num3) {
    return num1
  } else if (num2 < num1 && num2 < num3) {
    return num2
  } else {
    return num3
  }
}


const numeroDoMeio = (maior, menor, num1, num2, num3) => {

  if (num1 != maior && num1 != menor) {
    return num1
  } else if (num2 != maior && num2 != menor) {
    return num2
  } else {
    return num3
  }
}

const maior = maiorNumero(1,2,3)
const menor = menorNumero(1,2,3)
const meio = numeroDoMeio(maior, menor, 1,2,3)

console.log(`A Ordem Decrescente dos números é: ${maior}, ${meio}, ${menor}`);