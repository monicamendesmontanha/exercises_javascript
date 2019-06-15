console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.1]-----------------------------------------------------------------");
// 1.1 Faça um Programa que mostre a mensagem "Alo mundo" na tela.
console.log("Hello World!");



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.2]-----------------------------------------------------------------");
// 1.2 Faça um Programa que peça um número e então mostre a mensagem ''O número informado foi [número].
function myNumber(number) {
  return `O número informado é: ${number}.`;
}
console.log(myNumber(66));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.3]-----------------------------------------------------------------");
// 1.3 Faça um Programa que peça dois números e imprima a soma.
const mySum = (number1, number2) => {
    return `A soma do ${number1} + ${number2} é igual a ${number1 + number2}.`;
};
console.log(mySum(36, 64));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.4]-----------------------------------------------------------------");
// 1.4 Faça um Programa que peça as 4 notas bimestrais e mostre a média.
const myScore = (score1, score2, score3, score4) => {
  let media = (score1 + score2 + score3 + score4) / 4;
  return `A media das 4 notas bimestrais é: ${(media).toFixed(2)}.`;
}
console.log(myScore(7.8, 6.4, 8.0, 9.1));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.5]-----------------------------------------------------------------");
// 1.5 Faça um Programa que converta metros para centímetros.
const metrosToCentimetros = (metros) => {
  let centimentros = metros * 100;
  return `A quantidade de centimetros é de ${centimentros}.`;

}
console.log(metrosToCentimetros(100));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.6]-----------------------------------------------------------------");
// 1.6 Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
const areaCircle = (raio) => {
  const pi = 3.14;
  let area = pi * (raio**2);
  return `A area do radio de um círculo é: ${area}.`

};
console.log(areaCircle(3))



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.7]-----------------------------------------------------------------");
// 1.7 Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const areaSquareDouble = (lado1, lado2) => {
  let areaSquare = lado1 * lado2;
  let result = areaSquare * 2;
  return `O dobro da área de um quadrado é: ${result}.`
};
console.log(areaSquareDouble(2,2));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.8]-----------------------------------------------------------------");
// 1.8 Faça um Programa que pergunte quanto você ganha por hora e o número de horas
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const salary = (earnPerHour, amountWorkHoursPerMonth) => {
  let result = amountWorkHoursPerMonth * earnPerHour;
  return `Salary = $${result}.`
}
console.log(salary(30, 160));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.9]-----------------------------------------------------------------");
// 1.9 Faça um Programa que peça a temperatura em graus Farenheit, transforme e
// mostre a temperatura em graus Celsius.
// C = (5 * (F-32) / 9).
const farenheitToCelsius = (farenheit) => {
  let celcius = (5 * (farenheit - 32) / 9);
  return `${farenheit}º Farenheit = ${(celcius).toFixed(1)}º Celcius`
}
console.log(farenheitToCelsius(32));


console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.10]----------------------------------------------------------------");
// 1.10 Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre
// em graus Farenheit.
const celsiusToFarenheit = (celcius) => {
  let farenheit = ((celcius * 9) / 5) + 32
  return `${celcius}º Celcius = ${farenheit}º Farenheit`
};
console.log(celsiusToFarenheit(0));
