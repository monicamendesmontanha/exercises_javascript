console.log(
  "----------[Question 17]----------------------------------------------------------------"
);
// 17. Make a program that calculates the factorial of a user-supplied integer. Ex: 5! = 5.4.3.2.1 = 120


const factorial = (currentNumber) => {
  let index =  currentNumber - 1
  let result

  while (index >= 1) {
    let result = index * currentNumber

    // console.log( `${currentNumber} * ${index} = ${result}` )

    currentNumber = result
    index = index - 1

  }
  // console.log(newResult)
  return `The factorial is ${currentNumber}`
}

console.log(factorial(5));