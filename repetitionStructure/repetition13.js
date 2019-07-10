console.log(
  "----------[Question 13]----------------------------------------------------------------"
);
// 13. Make a program that asks for two numbers, base and exponent,
// calculate and show the first number raised to the second number.
// Do not use the language power function.


const calculate = (base, exponent) => {

  let result = base**exponent

  return `Result: ${result}`
}

console.log(calculate(2,3))