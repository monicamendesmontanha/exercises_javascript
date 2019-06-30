console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.1]-----------------------------------------------------------------");
// 1.1 Make a Program that shows the message "Hello World" on the screen.
console.log("Hello World!");



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.2]-----------------------------------------------------------------");
// 1.2 Make a Program that asks for a number and then displays the message "The number informed was [number]".
function myNumber(number) {
  return `The number informed was: ${number}.`;
}
console.log(myNumber(66));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.3]-----------------------------------------------------------------");
// 1.3 Make a Program that asks for two numbers and prints the sum.
const mySum = (number1, number2) => {
    return `The sum of ${number1} + ${number2} is igual to ${number1 + number2}.`;
};
console.log(mySum(36, 64));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.4]-----------------------------------------------------------------");
// 1.4 Make a Program that asks for the 4 bimonthly scores and shows the average.
const myScore = (score1, score2, score3, score4) => {
  let media = (score1 + score2 + score3 + score4) / 4;
  return `The average of 4 bimonthly scores is: ${(media).toFixed(2)}.`;
}
console.log(myScore(7.8, 6.4, 8.0, 9.1));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.5]-----------------------------------------------------------------");
// 1.5 Make a Program that converts meters to centimeters.
const metersToCentimeters = (meters) => {
  let centimeters = meters * 100;
  return `A quantidade de centimetros é de ${centimeters}.`;

}
console.log(metersToCentimeters(100));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.6]-----------------------------------------------------------------");
// 1.6 Make a Program that asks for the radius of a circle, calculates and shows its area.
const areaCircle = (radius) => {
  const pi = 3.14;
  let area = pi * (radius**2);
  return `The circle' area is: ${area}.`

};
console.log(areaCircle(3))



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.7]-----------------------------------------------------------------");
// 1.7 Make a Program that calculates the area of ​​a square, then show the double from this area to the user.
const areaSquareDouble = (lado1, lado2) => {
  let areaSquare = lado1 * lado2;
  let result = areaSquare * 2;
  return `The double from square' area is: ${result}.`
};
console.log(areaSquareDouble(2,2));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.8]-----------------------------------------------------------------");
// 1.8 Make a Program that asks how much you earn per hour and the number of hours
// worked in the month. Calculate and show the total of your salary in that month.
const salary = (earnPerHour, amountWorkHoursPerMonth) => {
  let result = amountWorkHoursPerMonth * earnPerHour;
  return `Salary = $${result}.`
}
console.log(salary(30, 160));



console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.9]-----------------------------------------------------------------");
// 1.9 Make a Program that asks for temperature in degrees Fahrenheit,
// show the temperature in degrees Celsius.
// C = (5 * (F-32) / 9).
const farenheitToCelsius = (farenheit) => {
  let celcius = (5 * (farenheit - 32) / 9);
  return `${farenheit}º Farenheit = ${(celcius).toFixed(1)}º Celcius`
}
console.log(farenheitToCelsius(32));


console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 1.10]----------------------------------------------------------------");
// 1.10 Make a Program that asks for temperature in degrees Celsius, transform and show
// in degrees Fahrenheit.

const celsiusToFarenheit = (celcius) => {
  let farenheit = ((celcius * 9) / 5) + 32
  return `${celcius}º Celcius = ${farenheit}º Farenheit`
};
console.log(celsiusToFarenheit(0));
