console.log("------------------------------------------------------------------------------------------");
console.log("----------[Question 1.11]-----------------------------------------------------------------");
// 1.11 Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// a. o produto do dobro do primeiro com metade do segundo .
// b. a soma do triplo do primeiro com o terceiro.
// c. o terceiro elevado ao cubo.
const playWithNumbers = (int1, int2, real) => {
  let a = (int1 * 2) * (int2 / 2);
  let b = (int1 * 3) + real;
  let c = real**3;
  return `A: ${a}, B: ${b}, C: ${c}`

};
console.log(playWithNumbers(2, 2, 2));



console.log("------------------------------------------------------------------------------------------");
console.log("----------[Question 1.12]-----------------------------------------------------------------");
// 1.12 Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
const weight = (height) => {
  let weight = (72.7* height) - 58;
  return `Com essa altura, ${height}, o seu peso ideal é ${weight.toFixed(2)}.`;
};
console.log(weight(1.68));



console.log("------------------------------------------------------------------------------------------");
console.log("----------[Question 1.13]-----------------------------------------------------------------");
// 1.13 Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um
// algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// * a. Para homens: (72.7*h) - 58
// * b. Para mulheres: (62.1*h) - 44.7 (h = altura)
// * c. Peça o peso da pessoa e informe se ela está dentro, acima ou abaixo do peso.
const idealWeight = (height, sex) => {
  if (sex === "M") {
    const weight = (72.7 * height) - 58;
    return `Weight, ${sex}: ${weight.toFixed(2)}`;
  } else ( sex === "F"); {
    const weight = (62.1 * height) - 44.7;
    return `Weight, ${sex}: ${weight.toFixed(2)}`;
  }
};
console.log(idealWeight(1.68, "F"));
console.log(idealWeight(1.72, "M"));



console.log("------------------------------------------------------------------------------------------");
console.log("----------[Question 1.14]-----------------------------------------------------------------");
// 1.14 João Papo-de-Pescador, homem de bem, comprou um microcomputador para
// controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de
// peixes maior que o estabelecido pelo regulamento de pesca do estado de São
// Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João
// precisa que você faça um programa que leia a variável peso (peso de peixes) e
// verifique se há excesso. Se houver, gravar na variável excesso e na variável multa
// o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com
// o conteúdo ZERO.
const papoDePescador = (kilo) => {

  let excesso = 0
  let multa = 0

  if (kilo > 50) {
    let excesso =  kilo - 50
    let multa = kilo * 4

    return `Pescador deve pagar multa no valor de $${multa}. Excesso de ${excesso} kilos.`
    // pagar multa 4,00 por kilo
  } else {
    return `Rendimento kilo: ${kilo}kg, excesso: $${excesso}, multa: $${multa}`
  }
}

console.log(papoDePescador(45));
console.log(papoDePescador(55));



console.log("------------------------------------------------------------------------------------------");
console.log("----------[Question 1.15]-----------------------------------------------------------------");
// 1.15 Faça um Programa que pergunte quanto você ganha por hora e o número de horas
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês,
// sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e
// 5% para o sindicato, faça um programa que nos dê:

// * a. salário bruto.
// * b. quanto pagou ao INSS.
// * c. quanto pagou ao sindicato.
// * d. o salário líquido.
// * e. calcule os descontos e o salário líquido, conforme a tabela abaixo:


// + Salário Bruto : R$
// - IR (11%) : R$
// - INSS (8%) : R$
// - Sindicato ( 5%) : R$
// = Salário Liquido : R$

//  Obs.: Salário Bruto - Descontos = Salário Líquido.

const salary = (earnPerHour, amountWorkhoursPerMonth) => {
  const salarioBruto = earnPerHour * amountWorkhoursPerMonth;
  const ir = salarioBruto * 0.11
  const inss = salarioBruto * 0.08
  const sindicato = salarioBruto * 0.05
  const salarioLiquido = salarioBruto - ir - inss - sindicato

  return `
  - Salário Bruto: $${salarioBruto}
  - IR (11%): $${ir}
  - INSS (8%): $${inss}
  - Sindicato (5%): $${sindicato}
  - Salário líquido: $${salarioLiquido}
  `
}
console.log(salary(30, 160));