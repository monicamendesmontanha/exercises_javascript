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


console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.3]-----------------------------------------------------------------");
// 2.3 Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

const verificaSexo = (sexo) => {
  if (sexo == "F" || sexo == "f") {
    return `${sexo} = Feminino`
  } else if (sexo == "M" || sexo == "m") {
    return `${sexo} = Masculino`
  } else {
    return `${sexo} = Sexo Inválido`
  }
}

console.log(verificaSexo("f"));
console.log(verificaSexo("F"));
console.log(verificaSexo("m"));
console.log(verificaSexo("M"));
console.log(verificaSexo("A"));


console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.4]-----------------------------------------------------------------");
// 2.4 Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

const vogalOuConsoante = (response) => {

  const letra = response.toLowerCase()

  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ) {
    return `A letra ${letra} é uma vogal!`
  } else {
    return `A letra ${letra} é uma consoante!`
  }
}


console.log(vogalOuConsoante("a"))
console.log(vogalOuConsoante("E"))
console.log(vogalOuConsoante("b"))
console.log(vogalOuConsoante("C"))