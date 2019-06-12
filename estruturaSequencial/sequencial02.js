console.log("-----------------------------------------------------------------");
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


console.log("-----------------------------------------------------------------");
// 1.12 Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
const weight = (height) => {
  let weight = (72.7* height) - 58;
  return `Com essa altura, ${height}, o seu peso ideal é ${weight.toFixed(2)}.`;
};
console.log(weight(1.68));


console.log("-----------------------------------------------------------------");
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


console.log("-----------------------------------------------------------------");
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


console.log("-----------------------------------------------------------------");