console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.11]----------------------------------------------------------------"
);
// 2.11 The Tabajara Organizations have decided to increase their salaries and oppose them to develop the program that will calculate the readjustments.
// Make a program that receives the salary of a collaborator and the adjustment according to the following criterion, based on the current salary:

// * wages up to $ 280.00 (including): increase of 20%
// * salaries between R $ 280,00 and R $ 700,00: increase of 15%
// * salaries between R $ 700.00 and R $ 1500.00: increase of 10%
// * salaries of R $ 1500,00 onwards: increase of 5% After the increase is made, inform on the screen:
// * the salary before readjustment;
// * the percentage of increase applied;
// * the amount of increase;
// * the new salary, after the increase.

const percentageSalary = salary => {

  console.log(`salary: $ ${salary}.`)

  if (salary <= 280) {
    return 0.20
  } else if (salary > 280 && salary <= 700) {
    return 0.15;
  } else if (salary > 700 && salary <= 1500) {
    return 0.10;
  } else if (salary > 1500) {
    return 0.05;
  }

};

const calculateNewSalary = (salary) => {
  const percentage = percentageSalary(salary)
  console.log(`Percentage of increase applied: ${percentage} %`)

  const newSalary = salary + (salary * percentage)
  console.log(`New salary: $ ${newSalary}.`)
  return newSalary
}

const amountOfIncrease = (salary) => {
  const newSalary = calculateNewSalary(salary)
  const amount = newSalary - salary
  return `The amount of increase: $ ${amount}.`
}


console.log(amountOfIncrease(250));
console.log(
  "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
);
console.log(amountOfIncrease(500));
console.log(
  "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
);
console.log(amountOfIncrease(1000));
console.log(
  "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
);
console.log(amountOfIncrease(2000));
