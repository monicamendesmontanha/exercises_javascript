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