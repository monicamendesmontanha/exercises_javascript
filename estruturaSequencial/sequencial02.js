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

const weight = (height) => {
  let weight = (72.7* height) - 58;
  return `Com essa altura, ${height}, o seu peso ideal é ${weight.toFixed(2)}.`;
};
console.log(weight(1.68));

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