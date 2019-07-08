console.log(
  "----------[Question 4]----------------------------------------------------------------"
);
// 4. Assuming that the population of a country A is of the order of 80000 inhabitants
// with an annual growth rate of 3% and that the population of B is 200000 inhabitants with
// a growth rate of 1.5%. Make a program that calculates and writes the number of years
// necessary for the population of country A to exceed or equal the population of country B,
// maintaining growth rates.

let populationA = 80
let populationB = 200

let currentlyYear = 2019

const annualGrowthRateA = 0.03
const annualGrowthRateB = 0.015

while (populationA < populationB) {

  populationA = populationA + (populationA * annualGrowthRateA)
  populationB = populationB + (populationB * annualGrowthRateB)

  currentlyYear = currentlyYear + 1

}

console.log(`In ${currentlyYear} the population of country A will exceed or equal the population of country B`)
console.log(`
populationA: ${populationA.toFixed(2)}
populationA: ${populationB.toFixed(2)}
`)
