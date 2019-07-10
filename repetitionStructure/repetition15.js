console.log(
  "----------[Question 15]----------------------------------------------------------------"
);
// 15. The Fibonacci series is formed by the sequence 1,1,2,3,5,8,13,21,34,55, ... Make a program capable of generating the series up to the nth term.

// 16. The Fibonacci series is formed by the sequence 0,1,1,2,3,5,8,13,21,34,55, ... Make a program that generates the series until the value is greater than 500 .

const fibonacci = (number) => {
  let currentNumber = 1, oldNumber = 0, tempNumber;

  while (number >= 0){
    tempNumber = currentNumber;
    currentNumber = currentNumber + oldNumber;
    console.log(`Sequence: ${currentNumber}`)

    if (currentNumber >= 500) {
      return `The value is greater than 500: ${currentNumber}`
    }

    oldNumber = tempNumber;
    number = number - 1;
  }

  return `The last value is ${currentNumber}`
}

console.log(fibonacci(10))
console.log("*************")
console.log(fibonacci(15))
