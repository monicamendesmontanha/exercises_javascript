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

// 1.12 Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

const idealWeight = (height) => {
  let weight = (72.7* height) - 58;
  return `Com essa altura, ${height}, o seu peso ideal é ${weight.toFixed(2)}.`;
};
console.log(idealWeight(1.68));