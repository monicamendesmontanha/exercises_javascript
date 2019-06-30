console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.12]----------------------------------------------------------------"
);
// 2.12 Make a program for the calculation of a payroll, knowing that the discounts are from the Income Tax,
// which depends on the gross salary (as per table below),
// and that the FGTS corresponds to 11% of the Gross Salary, but it is not discounted
// (it is the company that deposits). The Net Salary corresponds to the Gross Salary minus the discounts.
// The program should ask the user for the value of their time worked and the amount of hours worked in the month.
// IR discount:
// * Gross Salary up to 900 (inclusive) - exempt
// * Gross Salary up to 1500 (inclusive) - 5%
// * Gross Salary up to 2500 (inclusive) - 10% discount
// * Gross Salary above 2500 - 20% discount Print on the screen the information,
// arranged according to the example below. In the example the time value is 5 and the amount of time is 220.

//         Gross Salary: (5 * 220): R $ 1100.00
//         (-) IR (5%): R $ 55.00
//         (-) INSS (10%): R $ 110.00
//         FGTS (11%): R $ 121.00
//         Total discounts: R $ 220,00
//         Net Salary: R $ 880,00



// salario bruto = valor da hora * quantidade de horas
// IR = saber valor do IR de acordo com o salario
// INSS = saber valor do INSS de acordo com o salario
// FGTS = saber valor do FGTS de acordo com o salario
// DESCONTOS = somar IR INSS FGTS
// salario liquido = diminuir o salario bruto com a quantidade somada de discontos

const grossSalary = (valuePerHour, amountHours) => {
  const grossSalary = valuePerHour * amountHours
  return grossSalary
}


const rateIR = (salary) => {

  if (salary <= 900) {
    return ;
  } else if (salary > 900 && salary <= 1500) {
    return 0.05;
  } else if (salary > 1500 && salary <= 2500) {
    return 0.10;
  } else if (salary > 2500) {
    return 0.20;
  }
}

const discountIR = (salary, rate) => {
  const valueIR = salary * rate
  return valueIR;
}

const discountINSS = (salary) => {
  const valueINSS = salary * 0.10
  return valueINSS
}


const discountFGTS = (salary) => {
  const valueFGTS = salary * 0.11
  return valueFGTS
}



const calculatePayroll = (valuePerHour, amountHours) => {
  const salary = grossSalary(valuePerHour, amountHours)
  console.log(`Gross Salary: $ ${salary.toFixed(2)}`);

  const valueIR = discountIR(salary, rateIR(salary));
  console.log(`IR (${rateIR(salary)}%): $ ${valueIR.toFixed(2)}`)

  const valueINSS = discountINSS(salary);
  console.log(`INSS (10%): $ ${valueINSS.toFixed(2)}`)

  const valueFGTS = discountFGTS(salary);
  console.log(`FGTS (11%): $ ${valueFGTS.toFixed(2)}`)

  const totalDiscount = valueIR + valueINSS + valueIR
  console.log(`Total discount: $ ${totalDiscount.toFixed(2)}`)

  const netSalary = salary - totalDiscount
  console.log(`Net Salary: ${netSalary.toFixed(2)}`)
}



calculatePayroll(5, 220);