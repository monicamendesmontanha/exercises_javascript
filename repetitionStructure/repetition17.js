console.log(
  "----------[Question 17]----------------------------------------------------------------"
);
// 17. Make a program that calculates the factorial of a user-supplied integer. Ex: 5! = 5.4.3.2.1 = 120

const factorial = (currentNumber) => {
  let number = currentNumber
  let index =  currentNumber - 1

  while (index >= 1) {
    let result = currentNumber * index
    // console.log( `${currentNumber} * ${index} = ${result}` )

    currentNumber = result
    index = index - 1

  }
  return `The factorial of ${number} is ${currentNumber}`
}

console.log(factorial(5));