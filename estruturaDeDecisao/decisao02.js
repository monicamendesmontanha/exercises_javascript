console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.5]-----------------------------------------------------------------");
// 2.5 Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:

// * A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// * A mensagem "Reprovado", se a média for menor do que sete;
// * A mensagem "Aprovado com Distinção", se a média for igual a dez.

const mediaDoAluno = (nota1, nota2) => {

  const media = (nota1 + nota2) / 2;

  if (media == 10) {
    return `Aprovado com distincão ${media.toFixed(2)}`;
  } else if (media >= 7) {
  return `Aprovado com média ${media.toFixed(2)}`;
  } else {
    return `Reprovado com média ${media}`;
  }

}

console.log(mediaDoAluno(10, 10));
console.log(mediaDoAluno(9.9, 8.8));
console.log(mediaDoAluno(4.4, 6.6));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.6]-----------------------------------------------------------------");
// 2.6 Faça um Programa que leia três números e mostre o maior deles.

const maiorNumero = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return `${num1} é o maior número.`
  } else if (num2 > num1 && num2 > num3) {
    return `${num2} é o maior número.`
  } else {
    return `${num3} é o maior número.`
  }
}

console.log(maiorNumero(5, 4, 3)); // 5
console.log(maiorNumero(2, 50, 15)); // 50
console.log(maiorNumero(1, 10, 150)); //150