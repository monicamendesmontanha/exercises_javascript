console.log(
  "----------[Question 8]----------------------------------------------------------------"
);
// 8. Make a program that reads 5 numbers and report the sum and average of the numbers.

const averageNumbers = (numbers) => {

  const sum = numbers.reduce((previous, current) => current += previous);
  let average = sum / numbers.length;

  return `
    sum ${sum}
    average: ${average}
    `
}

console.log(averageNumbers([1,2,3,4,5]));